import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserObjectExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionObject,
> = (
	& dataParsers.DataParserObject<GenericDefinition>
	& DataParserExtended
);

export interface DataParserObjectExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionObject = dataParsers.DataParserDefinitionObject,
> extends _DataParserObjectExtended<GenericDefinition> {

}

export function object<
	const GenericShape extends dataParsers.DataParserObjectShape,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionObject, "shape">
	> = never,
>(
	shape: GenericShape,
	definition?: GenericDefinition,
): DataParserObjectExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionObject,
			NeverCoalescing<GenericDefinition, {}> & { shape: GenericShape }
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserObject,
		DataParserObjectExtended
	>(
		dataParsers.object(shape, definition) as never,
		{},
	) as never;
}
