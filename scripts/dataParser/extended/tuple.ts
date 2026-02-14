import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing, type SimplifyTopLevel, createOverride } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type DataParsers } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output } from "../base";

type _DataParserTupleExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTuple,
> = (
	& Kind<typeof dataParsers.tupleKind.definition>
	& DataParserExtended<
		GenericDefinition,
		Output<dataParsers.DataParserTuple<GenericDefinition>>,
		Input<dataParsers.DataParserTuple<GenericDefinition>>
	>
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
			readonly [dataParsers.CheckerRefineImplementation<Output<this>>]
		>
	>;

	/**
	 * {@include dataParser/extended/tuple/min/index.md}
	 */
	min(
		min: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">
		>
	): DataParserTupleExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.DataParserCheckerArrayMin]
		>
	>;

	/**
	 * {@include dataParser/extended/tuple/max/index.md}
	 */
	max(
		max: number,
		definition?: Partial<
			Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">
		>
	): DataParserTupleExtended<
		AddCheckersToDefinition<
			GenericDefinition,
			readonly [dataParsers.DataParserCheckerArrayMax]
		>
	>;

	/**
	 * {@include dataParser/extended/tuple/rest/index.md}
	 */
	rest<
		GenericDataParser extends DataParsers,
	>(
		dataParser: GenericDataParser
	): DataParserTupleExtended<
		SimplifyTopLevel<
			& Omit<GenericDefinition, "rest">
			& { readonly rest: GenericDataParser }
		>
	>;
}

/**
 * {@include dataParser/extended/tuple/index.md}
 */
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
	const self = dataParserExtendedInit<
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
			rest: (self, dataParser) => tuple(
				self.definition.shape,
				{
					...self.definition,
					rest: dataParser,
				},
			),
		},
		tuple.overrideHandler,
	);

	return self as never;
}

tuple.overrideHandler = createOverride<DataParserTupleExtended>("@duplojs/utils/data-parser-extended/tuple");
