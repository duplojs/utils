import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
type _DataParserUnknownExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnknown> = (dataParsers.DataParserUnknown<GenericDefinition> & DataParserExtended);
export interface DataParserUnknownExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnknown = dataParsers.DataParserDefinitionUnknown> extends _DataParserUnknownExtended<GenericDefinition> {
}
export declare function unknown<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionUnknown> = never>(definition?: GenericDefinition): DataParserUnknownExtended<MergeDefinition<dataParsers.DataParserDefinitionUnknown, NeverCoalescing<GenericDefinition, {}>>>;
export {};
