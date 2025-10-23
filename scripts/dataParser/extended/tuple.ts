import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserTupleExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTuple,
> = (
	& dataParsers.DataParserTuple<GenericDefinition>
	& DataParserExtended
);

export interface DataParserTupleExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionTuple = dataParsers.DataParserDefinitionTuple,
> extends _DataParserTupleExtended<GenericDefinition> {

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
		{},
	) as never;
}
