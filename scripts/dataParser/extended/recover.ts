import { type FixDeepFunctionInfer, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output, type DataParser } from "../base";

type _DataParserRecoverExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionRecover,
> = (
	& dataParsers.DataParserRecover<GenericDefinition>
	& DataParserExtended
);

export interface DataParserRecoverExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionRecover = dataParsers.DataParserDefinitionRecover,
> extends _DataParserRecoverExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserRecoverCheckers<Output<this>>,
			...dataParsers.DataParserRecoverCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserRecoverCheckers<Output<this>>,
				...dataParsers.DataParserRecoverCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserRecoverExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	refine(
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>
	): DataParserRecoverExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function recover<
	GenericDataParser extends DataParser,
	GenericRecoveredValue extends unknown,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionRecover, "inner" | "recoveredValue">
	> = never,
>(
	inner: GenericDataParser,
	recoveredValue: GenericRecoveredValue,
	definition?: GenericDefinition,
): DataParserRecoverExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionRecover,
			NeverCoalescing<GenericDefinition, {}> & {
				inner: GenericDataParser;
				recoveredValue: GenericRecoveredValue;
			}
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserRecover,
		DataParserRecoverExtended
	>(
		dataParsers.recover(inner, recoveredValue, definition),
		{},
	) as never;

	return recover.overrideHandler.apply(self) as never;
}

recover.overrideHandler = createOverride<DataParserRecoverExtended>("@duplojs/utils/data-parser-extended/recover");
