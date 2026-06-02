import { kindClass, keyWrappedValue, type ComputedTypeError, simpleClone, type MaybePromise, type IsEqual, type AnyConstructor, type Kind, type KindHandler, type RequireConstructor, type AnyFunction, type IsExtends } from "@scripts/common";
import { createDataParserKind } from "../kind";
import * as DEither from "@scripts/either";
import { type DataParserError, SymbolDataParserError, createError, addIssue } from "../error";
import { type DataParserChecker } from "./baseChecker";
import type { Output } from "./types";

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
const KWV = keyWrappedValue;
function createSyncError(error: DataParserError): SymbolDataParserError {
	return addIssue(
		error,
		"Parser execution must be synchronous",
		undefined,
		undefined,
	);
}

export class DataParserThrowError extends kindClass(
	"dataParserThrowError",
	Error,
) {
	public constructor(
		public value: unknown,
	) {
		super({}, "Parse Error.");
	}
}

export abstract class DataParserBase<
	GenericDefinition extends DataParserDefinition = DataParserDefinition,
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends kindClass(
		dataParserKind,
	)<
		never,
		{
			input: GenericInput;
			output: GenericOutput;
		}
	> {
	public readonly definition: GenericDefinition;

	public constructor(
		definition: GenericDefinition,
	) {
		super(null as never);
		this.definition = definition;
	}

	public abstract get classConstructor(): (
		& AnyConstructor<[any], DataParserBase<any>>
		& {
			create(...args: never[]): DataParserBase<any>;
			execParse(
				self: DataParserBase<any>,
				data: unknown,
				error: DataParserError,
			): unknown;
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
	): MaybePromise<
		| GenericOutput
		| SymbolDataParserError
	>;

	public exec(
		data: unknown,
		error: DataParserError,
	) {
		const result = this.execParse(data, error);

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
			return {
				...EE,
				[KWV]: createSyncError(error),
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

	public parseOrThrow(data: unknown): GenericOutput {
		const error = {
			...DPE,
			issues: [],
			currentPath: [],
		};
		const result = this.exec(data, error);

		if (result instanceof Promise) {
			throw new DataParserThrowError(createSyncError(error));
		}

		if (result === SymbolDataParserError) {
			throw new DataParserThrowError(error);
		}

		return result;
	}

	public async asyncParseOrThrow(data: unknown): Promise<GenericOutput> {
		const error = {
			...DPE,
			issues: [],
			currentPath: [],
		};
		const result = await this.exec(data, error);

		if (result === SymbolDataParserError) {
			throw new DataParserThrowError(error);
		}

		return result;
	}

	public addChecker(...checkers: never): DataParserBase {
		return new this.classConstructor({
			...this.definition,
			checkers: [...this.definition.checkers, ...checkers],
		}) as never;
	}

	public clone(): this;

	public clone() {
		return new this.classConstructor(simpleClone(this.definition)) as never;
	}

	protected abstract dataParserIsAsynchronous(): boolean;

	public isAsynchronous() {
		return this.dataParserIsAsynchronous()
			|| this.definition.checkers.some(
				(checker) => checker.isAsynchronous(),
			);
	}

	public contract<
		GenericValue extends unknown,
	>(
		...args: IsEqual<Output<this>, GenericValue> extends true
			? []
			: [] & ComputedTypeError<"Contract error.">
	): DataParser<GenericValue>;

	public contract() {
		return this;
	}

	public static init<
		GenericKindHandler extends KindHandler,
	>(
		kindHandler: GenericKindHandler,
	) {
		type CheckedConstructorKind = & Kind<{
			name: "checked-constructor";
			value: never;
		}>;

		abstract class DataParserBaseInit<
			GenericDefinition extends DataParserDefinition = DataParserDefinition,
			GenericOutput extends unknown = unknown,
			GenericInput extends unknown = GenericOutput,
		> extends kindClass(
				kindHandler,
				DataParserBase,
			)<
				DataParserBase<
					GenericDefinition,
					GenericOutput,
					GenericInput
				>
			> {
			public constructor(
				definition: GenericDefinition,
			) {
				super(null as never, definition);
			}

			public checkConstructor<
				GenericConstructor extends object,
			>(
				constructor: (
					GenericConstructor
					& RequireConstructor<GenericConstructor>
					& (
						"execParse" extends keyof GenericConstructor
							? GenericConstructor["execParse"] extends AnyFunction
								? IsExtends<
									Parameters<GenericConstructor["execParse"]>[0],
									Kind<GenericKindHandler["definition"]>
								> extends true
									? unknown
									: ComputedTypeError<"Wrong type of self argument.">
								: unknown
							: unknown
					)
				),
			): GenericConstructor & CheckedConstructorKind {
				return constructor as never;
			}

			public abstract override get classConstructor(): (
				& AnyConstructor<[any], DataParserBase<any> & Kind<GenericKindHandler["definition"]>>
				& {
					create(...args: never[]): DataParserBase<any> & Kind<GenericKindHandler["definition"]>;
					execParse(
						self: DataParserBase<any> & Kind<GenericKindHandler["definition"]>,
						data: unknown,
						error: DataParserError,
					): unknown;
				}
				& CheckedConstructorKind
			);
		}

		return DataParserBaseInit;
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
