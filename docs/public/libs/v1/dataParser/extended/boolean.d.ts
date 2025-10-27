import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
type _DataParserBooleanExtended<GenericDefinition extends dataParsers.DataParserDefinitionBoolean> = (dataParsers.DataParserBoolean<GenericDefinition> & DataParserExtended);
export interface DataParserBooleanExtended<GenericDefinition extends dataParsers.DataParserDefinitionBoolean = dataParsers.DataParserDefinitionBoolean> extends _DataParserBooleanExtended<GenericDefinition> {
}
export declare function boolean<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionBoolean> = never>(definition?: GenericDefinition): DataParserBooleanExtended<MergeDefinition<dataParsers.DataParserDefinitionBoolean, NeverCoalescing<GenericDefinition, {}>>>;
export {};
