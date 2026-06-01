import { type AnyConstructor, type AnyValue, type GetKind, kindClass, type MaybePromise, type RemoveAbstractFromConstructor } from "@scripts/common";
import { type SymbolDataParserError, type DataParserError } from "../error";
import { createDataParserKind } from "../kind";
import { type DataParser } from "./base";

export const checkerKind = createDataParserKind("checker");

export interface DataParserCheckerDefinition {
	readonly errorMessage?: string;
}

export abstract class DataParserCheckerBase<
	GenericDefinition extends DataParserCheckerDefinition = DataParserCheckerDefinition,
	GenericInput extends unknown = unknown,
> extends kindClass(checkerKind) {
	public readonly definition: GenericDefinition;

	public constructor(definition: GenericDefinition) {
		super(null as never);
		this.definition = definition;
	}

	public abstract get classConstructor(): GetKind<this> extends infer InferredKind
		? (
			& RemoveAbstractFromConstructor<
				typeof DataParserCheckerBase<
					any
				>
			>
			& AnyConstructor<[any], InferredKind>
			& {
				create(...args: never[]): DataParserCheckerBase & InferredKind;
				execCheck(
					data: GenericInput,
					error: DataParserError,
					self: DataParserCheckerBase & InferredKind,
					dataParser: DataParser,
				): MaybePromise<
					| AnyValue
					| SymbolDataParserError
				>;
			}
		)
		: never;

	private execCheck(
		data: GenericInput,
		error: DataParserError,
		dataParser: DataParser,
	): MaybePromise<
		| AnyValue
		| SymbolDataParserError
		> {
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
	): MaybePromise<
		| GenericOutput
		| SymbolDataParserError
		> {
		return this.execCheck(data, error, dataParser) as never;
	}

	public abstract isAsynchronous(): boolean;
}

export interface DataParserChecker<
	GenericInput extends unknown = unknown,
> extends DataParserCheckerBase<
		DataParserCheckerDefinition,
		GenericInput
	> {

}

export type InputChecker<
	GenericDataParser extends DataParserCheckerBase,
> = Parameters<GenericDataParser["exec"]>[0];
