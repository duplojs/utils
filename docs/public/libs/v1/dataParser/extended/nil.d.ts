import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
type _DataParserNilExtended<GenericDefinition extends dataParsers.DataParserDefinitionNil> = (dataParsers.DataParserNil<GenericDefinition> & DataParserExtended);
export interface DataParserNilExtended<GenericDefinition extends dataParsers.DataParserDefinitionNil = dataParsers.DataParserDefinitionNil> extends _DataParserNilExtended<GenericDefinition> {
}
export declare function nil<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionNil> = never>(definition?: GenericDefinition): DataParserNilExtended<MergeDefinition<dataParsers.DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}>>>;
export {};
