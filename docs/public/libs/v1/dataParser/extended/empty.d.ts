import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
type _DataParserEmptyExtended<GenericDefinition extends dataParsers.DataParserDefinitionEmpty> = (dataParsers.DataParserEmpty<GenericDefinition> & DataParserExtended);
export interface DataParserEmptyExtended<GenericDefinition extends dataParsers.DataParserDefinitionEmpty = dataParsers.DataParserDefinitionEmpty> extends _DataParserEmptyExtended<GenericDefinition> {
}
export declare function empty<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionEmpty> = never>(definition?: GenericDefinition): DataParserEmptyExtended<MergeDefinition<dataParsers.DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}>>>;
export {};
