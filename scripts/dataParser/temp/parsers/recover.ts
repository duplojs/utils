import { callThen, type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { DataParserBase, type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError, SymbolDataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";

export type DataParserRecoverCheckers<
	GenericInput extends unknown = unknown,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionRecover<
	GenericInput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserRecoverCheckers<GenericInput>
	> {
	readonly inner: DataParser;
	readonly recoveredValue: unknown;
}

export const recoverKind = createDataParserKind("recover");

export class DataParserRecover<
	GenericDefinition extends DataParserDefinitionRecover = DataParserDefinitionRecover,
> extends DataParserBase.init(
		recoverKind,
	)<
		GenericDefinition,
		GenericDefinition["recoveredValue"],
		Input<GenericDefinition["inner"]>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserRecover);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserRecover<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserRecover,
		data: unknown,
		error: DataParserError,
	) {
		return callThen(
			self.definition.inner.exec(data, error),
			(result) => result === SymbolDataParserError
				? self.definition.recoveredValue
				: result,
		);
	}

	public static override dataParserIsAsynchronous(self: DataParserRecover) {
		return self.definition.inner.isAsynchronous();
	}

	public static override create<
		GenericDataParser extends DataParser,
		GenericRecoveredValue extends Output<GenericDataParser>,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionRecover<
				Output<GenericDataParser>
			>,
			"inner" | "recoveredValue"
		> = never,
	>(
		inner: GenericDataParser,
		recoveredValue: GenericRecoveredValue,
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionRecover<
					Output<GenericDataParser>
				>,
				"inner" | "recoveredValue"
			>,
			GenericDefinition
		>,
	): DataParserRecover<
			MergeDefinition<
				DataParserDefinitionRecover,
				NeverCoalescing<GenericDefinition, {}> & {
					inner: GenericDataParser;
					recoveredValue: GenericRecoveredValue;
				}
			>
		> {
		return new DataParserRecover({
			...definition,
			inner,
			recoveredValue,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		}) as never;
	}
}

export const recover = DataParserRecover.create;
