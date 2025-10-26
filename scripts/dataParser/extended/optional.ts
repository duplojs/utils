import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type DataParsers, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserOptionalExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionOptional,
> = (
	& dataParsers.DataParserOptional<GenericDefinition>
	& DataParserExtended
);

export interface DataParserOptionalExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionOptional = dataParsers.DataParserDefinitionOptional,
> extends _DataParserOptionalExtended<GenericDefinition> {

}

export function optional<
	GenericDataParser extends DataParsers,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionOptional, "inner">
	> = never,
>(
	inner: GenericDataParser,
	definition?: GenericDefinition,
): DataParserOptionalExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionOptional,
			NeverCoalescing<GenericDefinition, {}> & { inner: GenericDataParser }
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserOptional,
		DataParserOptionalExtended
	>(
		dataParsers.optional(inner, definition),
		{},
	) as never;
}
