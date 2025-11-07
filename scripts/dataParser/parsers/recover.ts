import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";

export type DataParserRecoverCheckers<
	GenericInput extends unknown = unknown,
> = (
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionRecover extends DataParserDefinition<DataParserRecoverCheckers> {
	readonly inner: DataParser;
	readonly recoveredValue: unknown;
}

export const recoverKind = createDataParserKind("recover");

type _DataParserRecover<
	GenericDefinition extends DataParserDefinitionRecover,
> = (
	& DataParser<
		GenericDefinition,
		GenericDefinition["recoveredValue"],
		Input<GenericDefinition["inner"]>
	>
	& Kind<typeof recoverKind.definition>
);

export interface DataParserRecover<
	GenericDefinition extends DataParserDefinitionRecover = DataParserDefinitionRecover,
> extends _DataParserRecover<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			DataParserRecoverCheckers<Output<this>>,
			...DataParserRecoverCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserRecoverCheckers<Output<this>>,
				...DataParserRecoverCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserRecover<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;
}

export function recover<
	GenericDataParser extends DataParser,
	GenericRecoveredValue extends unknown,
	const GenericDefinition extends Partial<
		Omit<DataParserDefinitionRecover, "inner" | "recoveredValue">
	> = never,
>(
	inner: GenericDataParser,
	recoveredValue: GenericRecoveredValue,
	definition?: GenericDefinition,
): DataParserRecover<
		MergeDefinition<
			DataParserDefinitionRecover,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				recoveredValue: GenericRecoveredValue;
			}
		>
	> {
	return dataParserInit<DataParserRecover>(
		recoverKind,
		{
			definition: {
				errorMessage: definition?.errorMessage,
				checkers: definition?.checkers ?? [],
				inner,
				recoveredValue,
			},
		},
		{
			sync: (data, error, self) => {
				const result = self.definition.inner.exec(data, error);

				return result === SymbolDataParserError
					? self.definition.recoveredValue
					: result;
			},
			async: async(data, error, self) => {
				const result = await self.definition.inner.asyncExec(data, error);

				return result === SymbolDataParserError
					? self.definition.recoveredValue
					: result;
			},
		},
	) as never;
}
