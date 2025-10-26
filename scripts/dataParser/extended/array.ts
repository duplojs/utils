import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type DataParsers, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserArrayExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionArray,
> = (
	& dataParsers.DataParserArray<GenericDefinition>
	& DataParserExtended
);

export interface DataParserArrayExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionArray = dataParsers.DataParserDefinitionArray,
> extends _DataParserArrayExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserArrayCheckers,
			...dataParsers.DataParserArrayCheckers[],
		],
	>(
		...args: GenericChecker
	): DataParserArrayExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	min(
		min: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">
		>
	): DataParserArrayExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerArrayMin]
		>
	>;

	max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">
		>
	): DataParserArrayExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerArrayMax]
		>
	>;
}

export function array<
	GenericElement extends DataParsers,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionArray, "element">
	> = never,
>(
	element: GenericElement,
	definition?: GenericDefinition,
): DataParserArrayExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionArray,
			NeverCoalescing<GenericDefinition, {}> & { element: GenericElement }
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserArray,
		DataParserArrayExtended
	>(
		dataParsers.array(
			element,
			definition,
		),
		{
			min(self, min, definition) {
				return self.addChecker(
					dataParsers.checkerArrayMin(
						min,
						definition,
					),
				);
			},
			max(self, max, definition) {
				return self.addChecker(
					dataParsers.checkerArrayMax(
						max,
						definition,
					),
				);
			},
		},
	) as never;
}
