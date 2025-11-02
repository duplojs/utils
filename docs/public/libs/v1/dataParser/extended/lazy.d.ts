import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
type _DataParserLazyExtended<GenericDefinition extends dataParsers.DataParserDefinitionLazy> = (dataParsers.DataParserLazy<GenericDefinition> & DataParserExtended);
export interface DataParserLazyExtended<GenericDefinition extends dataParsers.DataParserDefinitionLazy = dataParsers.DataParserDefinitionLazy> extends _DataParserLazyExtended<GenericDefinition> {
}
export declare function lazy<GenericDataParser extends DataParser, const GenericDefinition extends Partial<dataParsers.DataParserDefinitionLazy> = never>(getter: () => GenericDataParser, definition?: GenericDefinition): DataParserLazyExtended<MergeDefinition<dataParsers.DataParserDefinitionLazy, NeverCoalescing<GenericDefinition, {}> & {
    getter(): GenericDataParser;
}>>;
export {};
