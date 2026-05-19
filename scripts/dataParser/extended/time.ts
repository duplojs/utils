import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserBaseExtended, dataParserBaseExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParserChecker } from "../base";
import { type TheTime } from "@scripts/date";

type _DataParserTimeExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTime,
> = (
	& Kind<typeof dataParsers.timeKind.definition>
	& DataParserBaseExtended<
		GenericDefinition,
		Output<dataParsers.DataParserTime<GenericDefinition>>,
		Input<dataParsers.DataParserTime<GenericDefinition>>
	>
);

export interface DataParserTimeExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTime = dataParsers.DataParserDefinitionTime,
> extends _DataParserTimeExtended<GenericDefinition> {
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
	): DataParserTimeExtended<
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
	): DataParserTimeExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/time/min/index.md}
	 */
	min(
		min: TheTime,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionTimeMin, "min">
		>
	): DataParserTimeExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.DataParserCheckerTimeMin]
		>
	>;

	/**
	 * {@include dataParser/extended/time/max/index.md}
	 */
	max(
		max: TheTime,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionTimeMax, "max">
		>
	): DataParserTimeExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.DataParserCheckerTimeMax]
		>
	>;
}

/**
 * {@include dataParser/extended/time/index.md}
 */
export function time<
	const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionTime> = never,
>(
	definition?: FixDeepFunctionInfer<
		PrepareDataParserDefinition<dataParsers.DataParserDefinitionTime>,
		GenericDefinition
	>,
): DataParserTimeExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionTime,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	const self = dataParserBaseExtendedInit<
		dataParsers.DataParserTime,
		DataParserTimeExtended
	>(
		dataParsers.time(definition),
		{
			min(self, min, definition) {
				return self.addChecker(
					dataParsers.checkerTimeMin(
						min,
						definition,
					),
				);
			},
			max(self, max, definition) {
				return self.addChecker(
					dataParsers.checkerTimeMax(
						max,
						definition,
					),
				);
			},
		},
		time.overrideHandler,
	);

	return self as never;
}

time.overrideHandler = createOverride<DataParserTimeExtended>("@duplojs/utils/data-parser-extended/time");
