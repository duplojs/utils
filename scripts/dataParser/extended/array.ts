import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";

type _DataParserArrayExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionArray,
> = (
	& Kind<typeof dataParsers.arrayKind.definition>
	& DataParserExtended<
		GenericDefinition,
		Output<GenericDefinition["element"]>[],
		Input<GenericDefinition["element"]>[]
	>
);

export interface DataParserArrayExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionArray = dataParsers.DataParserDefinitionArray,
> extends _DataParserArrayExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserArrayCheckers<Output<this>>,
			...dataParsers.DataParserArrayCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserArrayCheckers<Output<this>>,
				...dataParsers.DataParserArrayCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserArrayExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	construct<
		const GenericDefinition extends dataParsers.DataParserDefinitionArray,
	>(
		definition: GenericDefinition
	): DataParserArrayExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionArray,
			GenericDefinition
		>
	>;

	refine(
		theFunction: (input: Output<this>) => boolean,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">
		>
	): DataParserArrayExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.CheckerRefineImplementation<Output<this>>]
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
	GenericElement extends DataParser,
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
	const self = dataParserExtendedInit<
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

	return array.overrideHandler.apply(self) as never;
}

array.overrideHandler = createOverride<DataParserArrayExtended>("@duplojs/utils/data-parser-extended/array");
