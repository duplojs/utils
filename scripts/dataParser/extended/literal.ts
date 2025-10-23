import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLiteral,
> = (
	& dataParsers.DataParserLiteral<GenericDefinition>
	& DataParserExtended
);

export interface DataParserLiteralExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLiteral = dataParsers.DataParserDefinitionLiteral,
> extends _DataParserLiteralExtended<GenericDefinition> {

}

export function literal<
	const GenericValue extends dataParsers.LiteralValue,
	const GenericDefinition extends Partial<
		Omit<dataParsers.DataParserDefinitionLiteral, "value">
	> = never,
>(
	value: GenericValue | GenericValue[],
	definition?: GenericDefinition,
): DataParserLiteralExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionLiteral,
			NeverCoalescing<GenericDefinition, {}> & { value: GenericValue[] }
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserLiteral,
		DataParserLiteralExtended
	>(
		dataParsers.literal(value, definition),
		{},
	) as never;
}
