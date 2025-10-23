import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserStringExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionString,
> = (
	& dataParsers.DataParserString<GenericDefinition>
	& DataParserExtended
);

export interface DataParserStringExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionString = dataParsers.DataParserDefinitionString,
> extends _DataParserStringExtended<GenericDefinition> {

}

export function string<
	const GenericDefinition extends Partial<dataParsers.DataParserDefinitionString> = never,
>(
	definition?: GenericDefinition,
): DataParserStringExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionString,
			NeverCoalescing<GenericDefinition, {}>
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserString,
		DataParserStringExtended
	>(
		dataParsers.string(definition),
		{},
	) as never;
}
