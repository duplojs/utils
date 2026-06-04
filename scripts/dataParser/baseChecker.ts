import * as DCommon from "@scripts/common";
import { type SymbolDataParserError, type DataParserError } from "./error";
import { createDataParserKind } from "./kind";
import { type DataParser } from "./base";
import { type DataParserCheckerBaseInit } from "./types";

export const checkerKind = createDataParserKind("checker");

export interface DataParserCheckerDefinition {
	readonly errorMessage?: string;
}

export abstract class DataParserCheckerBase<
	GenericDefinition extends DataParserCheckerDefinition = DataParserCheckerDefinition,
	GenericInput extends unknown = unknown,
> extends DCommon.kindClass(checkerKind) {
	public readonly definition: GenericDefinition;

	public constructor(definition: GenericDefinition) {
		super(null as never);
		this.definition = definition;
		DCommon.bindPrototypeMethods(this);
	}

	public abstract get classConstructor(): (
		& DCommon.AnyConstructor<[any], DataParserCheckerBase<any>>
		& {
			create(...args: never[]): DataParserCheckerBase<any>;
			execCheck(
				data: GenericInput,
				error: DataParserError,
				self: DataParserCheckerBase<any>,
				dataParser: DataParser,
			): unknown;
		}
	);

	private execCheck(
		data: GenericInput,
		error: DataParserError,
		dataParser: DataParser,
	): unknown {
		const execCheck = this.classConstructor.execCheck;
		const self = this as never;
		this.execCheck = (data, error, dataParser) => execCheck(data, error, self, dataParser);
		return this.execCheck(data, error, dataParser);
	}

	public exec<
		GenericOutput extends GenericInput,
	>(
		data: GenericInput,
		error: DataParserError,
		dataParser: DataParser,
	): DCommon.MaybePromise<
		| GenericOutput
		| SymbolDataParserError
	>;

	public exec(
		data: GenericInput,
		error: DataParserError,
		dataParser: DataParser,
	) {
		return this.execCheck(data, error, dataParser);
	}

	/**
	 * {@include dataParser/classic/baseChecker/clone/index.md}
	 */
	public clone(): this;

	public clone() {
		return new this.classConstructor(DCommon.simpleClone(this.definition));
	}

	/**
	 * {@include dataParser/classic/baseChecker/setErrorMessage/index.md}
	 */
	public setErrorMessage(errorMessage: string): this {
		(this.definition.errorMessage as any) = errorMessage;
		return this;
	}

	/**
	 * {@include dataParser/classic/baseChecker/addErrorMessage/index.md}
	 */
	public addErrorMessage(errorMessage: string): this {
		const newSchema = this.clone();

		newSchema.setErrorMessage(errorMessage);

		return newSchema;
	}

	public abstract isAsynchronous(): boolean;

	public declare static create: (
		...args: never[]
	) => unknown;

	public declare static execCheck: (
		data: any,
		error: DataParserError,
		self: any,
		dataParser: DataParser,
	) => unknown;

	public static init<
		GenericKindHandler extends DCommon.KindHandler,
	>(
		kindHandler: GenericKindHandler,
	): DataParserCheckerBaseInit<GenericKindHandler> {
		abstract class _DataParserCheckerBaseInit extends DCommon.kindClass(
			kindHandler,
			DataParserCheckerBase,
		) {
			public constructor(
				definition: DataParserCheckerDefinition,
			) {
				super(null as never, definition);
			}

			public checkConstructor(constructor: object) {
				return constructor;
			}

			public static specificKindHandler = kindHandler;
		}

		return _DataParserCheckerBaseInit as never;
	}
}

export interface DataParserChecker<
	GenericInput extends unknown = unknown,
> extends DataParserCheckerBase<
		DataParserCheckerDefinition,
		GenericInput
	> {

}
