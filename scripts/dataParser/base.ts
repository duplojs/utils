import * as DCommon from "@scripts/common";
import { createDataParserKind } from "./kind";
import * as DEither from "@scripts/either";
import { type DataParserError, SymbolDataParserError, createError, addAsyncIssue } from "./error";
import { type DataParserChecker } from "./baseChecker";
import type { Output, DataParserBaseInit } from "./types";

export interface DataParserDefinition<
	GenericChecker extends DataParserChecker = DataParserChecker,
> {
	readonly errorMessage?: string;
	readonly checkers: readonly GenericChecker[];
}

export const dataParserKind = createDataParserKind<
	"base",
	{
		input: unknown;
		output: unknown;
	}
>("base");

const DPE = createError();
const EE = DEither.error(null);
const ES = DEither.success(null);
const KWV = DCommon.keyWrappedValue;

export class ParseError extends DCommon.kindClass(
	"parse-error",
	Error,
) {
	public constructor(
		public error: DataParserError,
	) {
		super({}, "Parse Error.");
	}
}

export abstract class DataParserBase<
	GenericDefinition extends DataParserDefinition = DataParserDefinition,
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends DCommon.kindClass(
		dataParserKind,
	)<
		never,
		{
			output: GenericOutput;
			input: GenericInput;
		}
	> {
	public readonly definition: GenericDefinition;

	public constructor(
		definition: GenericDefinition,
	) {
		super(null as never);
		this.definition = definition;

		DCommon.bindPrototypeMethods(this);
	}

	public abstract get classConstructor(): (
		& DCommon.AnyConstructor<[any], DataParserBase<any>>
		& {
			create(...args: never[]): DataParserBase<any>;
			execParse(
				self: DataParserBase<any>,
				data: unknown,
				error: DataParserError,
			): unknown;
			dataParserIsAsynchronous(
				self: DataParserBase<any>,
			): boolean;
			prepareDefinition(
				...args: never[]
			): DataParserDefinition;
		}
	);

	private execParse(
		data: unknown,
		error: DataParserError,
	): unknown {
		const execParse = this.classConstructor.execParse;
		const self = this as never;
		this.execParse = (data, error) => execParse(self, data, error);
		return this.execParse(data, error);
	}

	public exec(
		data: unknown,
		error: DataParserError,
	): DCommon.MaybePromise<
		| GenericOutput
		| SymbolDataParserError
	>;

	public exec(
		data: unknown,
		error: DataParserError,
	) {
		const result: unknown = this.execParse(data, error);

		if (
			result !== SymbolDataParserError
			&& this.definition.checkers.length
		) {
			return this.definition.checkers.reduce(
				(accumulator, checker) => {
					if (accumulator === SymbolDataParserError) {
						return accumulator;
					}
					if (accumulator instanceof Promise) {
						return accumulator.then(
							(awaitedAccumulator) => awaitedAccumulator === SymbolDataParserError
								? awaitedAccumulator
								: checker.exec(awaitedAccumulator, error, this),
						);
					}

					return checker.exec(accumulator, error, this);
				},
				result,
			);
		}

		return result;
	}

	/**
	 * {@include dataParser/classic/base/parse/index.md}
	 */
	public parse(data: unknown): (
		| DEither.Success<GenericOutput>
		| DEither.Error<DataParserError>
	) {
		const error = {
			...DPE,
			issues: [],
			currentPath: [],
		};
		const result = this.exec(data, error);

		if (result instanceof Promise) {
			addAsyncIssue(error, result, this);

			return {
				...EE,
				[KWV]: error,
			} as DEither.Error<any>;
		}

		if (result === SymbolDataParserError) {
			return {
				...EE,
				[KWV]: error,
			} as DEither.Error<any>;
		}

		return {
			...ES,
			[KWV]: result,
		} as DEither.Success<any>;
	}

	/**
	 * {@include dataParser/classic/base/asyncParse/index.md}
	 */
	public async asyncParse(data: unknown): Promise<
		| DEither.Success<GenericOutput>
		| DEither.Error<DataParserError>
	> {
		const error = {
			...DPE,
			issues: [],
			currentPath: [],
		};
		const result = await this.exec(data, error);

		if (result === SymbolDataParserError) {
			return {
				...EE,
				[KWV]: error,
			} as DEither.Error<any>;
		}

		return {
			...ES,
			[KWV]: result,
		} as DEither.Success<any>;
	}

	/**
	 * {@include dataParser/classic/base/parseOrThrow/index.md}
	 */
	public parseOrThrow(data: unknown): GenericOutput {
		const error = {
			...DPE,
			issues: [],
			currentPath: [],
		};
		const result = this.exec(data, error);

		if (result instanceof Promise) {
			addAsyncIssue(error, result, this);

			throw new ParseError(error);
		}

		if (result === SymbolDataParserError) {
			throw new ParseError(error);
		}

		return result;
	}

	/**
	 * {@include dataParser/classic/base/asyncParseOrThrow/index.md}
	 */
	public async asyncParseOrThrow(data: unknown): Promise<GenericOutput> {
		const error = {
			...DPE,
			issues: [],
			currentPath: [],
		};
		const result = await this.exec(data, error);

		if (result === SymbolDataParserError) {
			throw new ParseError(error);
		}

		return result;
	}

	/**
	 * {@include dataParser/classic/base/addChecker/index.md}
	 */
	public addChecker(...checkers: never): DataParserBase {
		return new this.classConstructor({
			...this.definition,
			checkers: [...this.definition.checkers, ...checkers],
		}) as never;
	}

	/**
	 * {@include dataParser/classic/base/clone/index.md}
	 */
	public clone(): this;

	public clone() {
		return new this.classConstructor(DCommon.simpleClone(this.definition));
	}

	private cachedIsAsynchronous: undefined | boolean = undefined;

	/**
	 * {@include dataParser/classic/base/isAsynchronous/index.md}
	 */
	public isAsynchronous() {
		if (this.cachedIsAsynchronous !== undefined) {
			return this.cachedIsAsynchronous;
		}

		this.cachedIsAsynchronous = this.definition.checkers.some(
			(checker) => checker.isAsynchronous(),
		);

		if (this.cachedIsAsynchronous) {
			return this.cachedIsAsynchronous;
		}

		this.cachedIsAsynchronous = this.classConstructor.dataParserIsAsynchronous(this);

		return this.cachedIsAsynchronous;
	}

	/**
	 * {@include dataParser/classic/base/contract/index.md}
	 */
	public contract<
		GenericValue extends unknown,
	>(
		...args: DCommon.IsEqual<Output<this>, GenericValue> extends true
			? []
			: [] & DCommon.ComputedTypeError<"Contract error.">
	): DataParser<GenericValue> {
		return this as never;
	}

	/**
	 * {@include dataParser/classic/base/setErrorMessage/index.md}
	 */
	public setErrorMessage(errorMessage: string): this {
		(this.definition.errorMessage as any) = errorMessage;
		return this;
	}

	/**
	 * {@include dataParser/classic/base/addErrorMessage/index.md}
	 */
	public addErrorMessage(errorMessage: string): this {
		const newSchema = this.clone();

		newSchema.setErrorMessage(errorMessage);

		return newSchema;
	}

	public declare static create: (
		...args: never[]
	) => unknown;

	public declare static execParse: (
		self: any,
		data: unknown,
		error: DataParserError,
	) => unknown;

	public declare static dataParserIsAsynchronous: (
		self: any,
	) => boolean;

	public declare static prepareDefinition: (
		...args: never[]
	) => DataParserDefinition;

	public static init<
		GenericKindHandler extends DCommon.KindHandler,
	>(
		kindHandler: GenericKindHandler,
	): DataParserBaseInit<GenericKindHandler> {
		abstract class _DataParserBaseInit extends DCommon.kindClass(
			kindHandler,
			DataParserBase,
		) {
			public constructor(
				definition: DataParserDefinition,
			) {
				super(null as never, definition);
			}

			public checkConstructor(constructor: object) {
				return constructor;
			}

			public static specificKindHandler = kindHandler;
		}

		return _DataParserBaseInit as never;
	}
}

export interface DataParser<
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends DataParserBase<
		DataParserDefinition,
		GenericOutput,
		GenericInput
	> {
	addChecker(
		...args: DataParserChecker<
			GenericOutput
		>[]
	): DataParser<GenericOutput, GenericInput>;
}

export type Contract<
	GenericDataParser extends DataParserBase,
> = (
	& DCommon.GetKind<GenericDataParser>
	& Omit<DCommon.RemoveKind<DataParserBase>, "addChecker" | "clone" | "definition">
	& Pick<GenericDataParser, "definition">
	& {
		addChecker(...args: never): Contract<GenericDataParser>;
		clone(): Contract<GenericDataParser>;
	}
);
