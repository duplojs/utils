import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type DataParsers, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserNullableExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNullable,
> = (
	& dataParsers.DataParserNullable<GenericDefinition>
	& DataParserExtended
);

export interface DataParserNullableExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionNullable = dataParsers.DataParserDefinitionNullable,
> extends _DataParserNullableExtended<GenericDefinition> {

}

export function nullable<
	GenericDataParser extends DataParsers,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionNullable, "inner">
	> = never,
>(
	inner: GenericDataParser,
	definition?: GenericDefinition,
): DataParserNullableExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionNullable,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserNullable,
		DataParserNullableExtended
	>(
		dataParsers.nullable(inner, definition),
		{},
	) as never;
}
