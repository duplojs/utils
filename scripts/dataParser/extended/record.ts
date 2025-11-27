import { type FixDeepFunctionInfer, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output, type DataParser } from "../base";

type _DataParserRecordExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionRecord,
> = (
	& dataParsers.DataParserRecord<GenericDefinition>
	& DataParserExtended
);

export interface DataParserRecordExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionRecord = dataParsers.DataParserDefinitionRecord,
> extends _DataParserRecordExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserRecordCheckers<Output<this>>,
			...dataParsers.DataParserRecordCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserRecordCheckers<Output<this>>,
				...dataParsers.DataParserRecordCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserRecordExtended<
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
	): DataParserRecordExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

export function record<
	GenericDataParserKey extends dataParsers.DataParserRecordKey,
	GenericDataParserValue extends DataParser,
	const GenericDefinition extends Partial<dataParsers.DataParserDefinitionRecord> = never,
>(
	key: GenericDataParserKey,
	value: GenericDataParserValue,
	definition?: GenericDefinition,
): DataParserRecordExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionRecord,
			NeverCoalescing<GenericDefinition, {}> & {
				key: GenericDataParserKey;
				value: GenericDataParserValue;
			}
		>
	> {
	const self = dataParserExtendedInit<
		dataParsers.DataParserRecord,
		DataParserRecordExtended
	>(
		dataParsers.record(key, value, definition),
		{},
	) as never;

	return record.overrideHandler.apply(self) as never;
}

record.overrideHandler = createOverride<DataParserRecordExtended>("@duplojs/utils/data-parser-extended/record");
