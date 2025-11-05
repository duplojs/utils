import { type FixDeepFunctionInfer, type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";

type _DataParserTupleExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTuple,
> = (
	& dataParsers.DataParserTuple<GenericDefinition>
	& DataParserExtended
);

export interface DataParserTupleExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTuple = dataParsers.DataParserDefinitionTuple,
> extends _DataParserTupleExtended<GenericDefinition> {
	addChecker<
		GenericChecker extends readonly [
			dataParsers.DataParserTupleCheckers<Output<this>>,
			...dataParsers.DataParserTupleCheckers<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				dataParsers.DataParserTupleCheckers<Output<this>>,
				...dataParsers.DataParserTupleCheckers<Output<this>>[],
			],
			GenericChecker
		>
	): DataParserTupleExtended<
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
	): DataParserTupleExtended<
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
	): DataParserTupleExtended<
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
	): DataParserTupleExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			[dataParsers.DataParserCheckerArrayMax]
		>
	>;
}

export function tuple<
	GenericShape extends dataParsers.TupleShape,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionTuple, "shape">
	> = never,
>(
	shape: GenericShape,
	definition?: GenericDefinition,
): DataParserTupleExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionTuple,
			NeverCoalescing<GenericDefinition, {}> & { shape: GenericShape }
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserTuple,
		DataParserTupleExtended
	>(
		dataParsers.tuple(shape, definition) as never,
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
