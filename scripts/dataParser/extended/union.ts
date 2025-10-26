import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserUnionExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionUnion,
> = (
	& dataParsers.DataParserUnion<GenericDefinition>
	& DataParserExtended
);

export interface DataParserUnionExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionUnion = dataParsers.DataParserDefinitionUnion,
> extends _DataParserUnionExtended<GenericDefinition> {

}

export function union<
	GenericOptions extends dataParsers.UnionOptions,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionUnion, "options">
	> = never,
>(
	options: GenericOptions,
	definition?: GenericDefinition,
): DataParserUnionExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionUnion,
			NeverCoalescing<GenericDefinition, {}> & { options: GenericOptions }
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserUnion,
		DataParserUnionExtended
	>(
		dataParsers.union(options, definition),
		{},
	) as never;
}
