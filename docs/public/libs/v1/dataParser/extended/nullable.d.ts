import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
type _DataParserNullableExtended<GenericDefinition extends dataParsers.DataParserDefinitionNullable> = (dataParsers.DataParserNullable<GenericDefinition> & DataParserExtended);
export interface DataParserNullableExtended<GenericDefinition extends dataParsers.DataParserDefinitionNullable = dataParsers.DataParserDefinitionNullable> extends _DataParserNullableExtended<GenericDefinition> {
}
export declare function nullable<GenericDataParser extends DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionNullable, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserNullableExtended<MergeDefinition<dataParsers.DataParserDefinitionNullable, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export {};
