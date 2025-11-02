import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
type _DataParserRecordExtended<GenericDefinition extends dataParsers.DataParserDefinitionRecord> = (dataParsers.DataParserRecord<GenericDefinition> & DataParserExtended);
export interface DataParserRecordExtended<GenericDefinition extends dataParsers.DataParserDefinitionRecord = dataParsers.DataParserDefinitionRecord> extends _DataParserRecordExtended<GenericDefinition> {
}
export declare function record<GenericDataParserKey extends dataParsers.DataParserRecordKey, GenericDataParserValue extends DataParser, const GenericDefinition extends Partial<dataParsers.DataParserDefinitionRecord> = never>(key: GenericDataParserKey, value: GenericDataParserValue, definition?: GenericDefinition): DataParserRecordExtended<MergeDefinition<dataParsers.DataParserDefinitionRecord, NeverCoalescing<GenericDefinition, {}> & {
    key: GenericDataParserKey;
    value: GenericDataParserValue;
}>>;
export {};
