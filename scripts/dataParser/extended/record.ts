import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserBaseExtended, dataParserBaseExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser, type DataParserChecker } from "../base";

type _DataParserRecordExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionRecord,
> = (
	& Kind<typeof dataParsers.recordKind.definition>
	& DataParserBaseExtended<
		GenericDefinition,
		Output<dataParsers.DataParserRecord<GenericDefinition>>,
		Input<dataParsers.DataParserRecord<GenericDefinition>>
	>
);

export interface DataParserRecordExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionRecord = dataParsers.DataParserDefinitionRecord,
> extends _DataParserRecordExtended<GenericDefinition> {
	addChecker<
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
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;
}

/**
 * {@include dataParser/extended/record/index.md}
 */
export function record<
	GenericDataParserKey extends dataParsers.DataParserRecordKey,
	GenericDataParserValue extends DataParser,
	const GenericDefinition extends PrepareDataParserDefinition<
		dataParsers.DataParserDefinitionRecord<
			Record<
				Extract<Output<GenericDataParserKey>, string | number>,
				Output<GenericDataParserValue>
			>
		>,
		"key" | "value" | "baseData" | "requireKey"
	> = never,
>(
	key: GenericDataParserKey,
	value: GenericDataParserValue,
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<
			dataParsers.DataParserDefinitionRecord<
				Record<
					Extract<Output<GenericDataParserKey>, string | number>,
					Output<GenericDataParserValue>
				>
			>,
			"key" | "value" | "baseData" | "requireKey"
		>,
		GenericDefinition
	>,
): DataParserRecordExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionRecord,
			NeverCoalescing<GenericDefinition, {}> & {
				key: GenericDataParserKey;
				value: GenericDataParserValue;
			}
		>
	> {
	const self = dataParserBaseExtendedInit<
		dataParsers.DataParserRecord,
		DataParserRecordExtended
	>(
		dataParsers.record(key, value, definition),
		{},
		record.overrideHandler,
	);

	return self as never;
}

record.overrideHandler = createOverride<DataParserRecordExtended>("@duplojs/utils/data-parser-extended/record");
