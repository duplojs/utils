import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
type _DataParserOptionalExtended<GenericDefinition extends dataParsers.DataParserDefinitionOptional> = (dataParsers.DataParserOptional<GenericDefinition> & DataParserExtended);
export interface DataParserOptionalExtended<GenericDefinition extends dataParsers.DataParserDefinitionOptional = dataParsers.DataParserDefinitionOptional> extends _DataParserOptionalExtended<GenericDefinition> {
}
export declare function optional<GenericDataParser extends DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionOptional, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserOptionalExtended<MergeDefinition<dataParsers.DataParserDefinitionOptional, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export {};
