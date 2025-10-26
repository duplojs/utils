import { type NeverCoalescing } from "@scripts/common";
import { type DataParserExtended, dataParserExtendedInit } from "../baseExtended";
import { type DataParsers, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";

type _DataParserLazyExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLazy,
> = (
	& dataParsers.DataParserLazy<GenericDefinition>
	& DataParserExtended
);

export interface DataParserLazyExtended<
	GenericDefinition extends dataParsers.DataParserDefinitionLazy = dataParsers.DataParserDefinitionLazy,
> extends _DataParserLazyExtended<GenericDefinition> {

}

export function lazy<
	GenericDataParser extends DataParsers,
	const GenericDefinition extends Partial<dataParsers.DataParserDefinitionLazy> = never,
>(
	getter: () => GenericDataParser,
	definition?: GenericDefinition,
): DataParserLazyExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionLazy,
			NeverCoalescing<GenericDefinition, {}> & {
				getter(): GenericDataParser;
			}
		>
	> {
	return dataParserExtendedInit<
		dataParsers.DataParserLazy,
		DataParserLazyExtended
	>(
		dataParsers.lazy(getter, definition),
		{},
	) as never;
}
