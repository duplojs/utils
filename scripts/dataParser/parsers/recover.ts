import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, createOverride } from "@scripts/common";
import { type DataParserDefinition, type DataParser, dataParserInit, type Output, type Input, SymbolDataParserError, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "@scripts/dataParser/types";
import { createDataParserKind } from "../kind";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "@scripts/object";

export interface DataParserRecoverCheckerCustom<
	GenericInput extends unknown = unknown,
> {}

export type DataParserRecoverCheckers<
	GenericInput extends unknown = unknown,
> = (
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
	| DataParserRecoverCheckerCustom<GenericInput>[
		GetPropsWithValueExtends<
			DataParserRecoverCheckerCustom<GenericInput>,
			DataParserChecker
		>
	]
	| CheckerRefineImplementation<GenericInput>
);

export interface DataParserDefinitionRecover extends DataParserDefinition<
	DataParserRecoverCheckers
> {
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

	construct<
		const GenericDefinition extends DataParserDefinitionRecover,
	>(
		definition: GenericDefinition
	): DataParserRecover<
		MergeDefinition<
			DataParserDefinitionRecover,
			GenericDefinition
		>
	>;
}

export function recover<
	GenericDataParser extends DataParser,
	GenericRecoveredValue extends Output<GenericDataParser>,
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
	const self = dataParserInit<DataParserRecover>(
		recoverKind,
		{
			errorMessage: definition?.errorMessage,
			checkers: definition?.checkers ?? [],
			inner,
			recoveredValue,
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

	return recover.overrideHandler.apply(self) as never;
}

recover.overrideHandler = createOverride<DataParserRecover>("@duplojs/utils/data-parser/recover");
