import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type DataParsers, type MergeDefinition } from "../types";
import { type DataParserString } from "./string";
import { type DataParserTemplateLiteral } from "./templateLiteral";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "./literal";
import { type DataParserDefinitionNumber, type DataParserNumber } from "./number";
import { type DataParserDefinitionUnion, type DataParserUnion } from "./union";
export type DataParserRecordKey = (DataParserString | DataParserTemplateLiteral | DataParserLiteral<DataParserDefinitionLiteral & {
    value: string[];
}> | DataParserNumber<DataParserDefinitionNumber & {
    coerce: true;
}> | DataParserUnion<DataParserDefinitionUnion & {
    options: DataParserRecordKey[];
}>);
export interface DataParserDefinitionRecord extends DataParserDefinition<never> {
    readonly key: DataParserRecordKey;
    readonly value: DataParsers;
}
export declare const dataParserRecordKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/record", unknown>>;
export type DataParserRecordShapeOutput<GenericDataParserKey extends DataParserRecordKey, GenericDataParserValue extends DataParsers> = Extract<Record<Output<GenericDataParserKey> extends infer InferredKey extends string | number ? `${InferredKey}` : never, Output<GenericDataParserValue> extends infer InferredValue ? InferredValue : never>, any>;
export type DataParserRecordShapeInput<GenericDataParserKey extends DataParserRecordKey, GenericDataParserValue extends DataParsers> = Extract<Record<Input<GenericDataParserKey> extends infer InferredKey extends string | number ? InferredKey : never, Input<GenericDataParserValue> extends infer InferredValue ? InferredValue : never>, any>;
type _DataParserRecord<GenericDefinition extends DataParserDefinitionRecord> = (DataParser<GenericDefinition, DataParserRecordShapeOutput<GenericDefinition["key"], GenericDefinition["value"]> extends infer InferredOutput ? InferredOutput : never, DataParserRecordShapeInput<GenericDefinition["key"], GenericDefinition["value"]>> & Kind<typeof dataParserRecordKind.definition>);
export interface DataParserRecord<GenericDefinition extends DataParserDefinitionRecord = DataParserDefinitionRecord> extends _DataParserRecord<GenericDefinition> {
}
export declare function record<GenericDataParserKey extends DataParserRecordKey, GenericDataParserValue extends DataParsers, const GenericDefinition extends Partial<DataParserDefinitionRecord> = never>(key: GenericDataParserKey, value: GenericDataParserValue, definition?: GenericDefinition): DataParserRecord<MergeDefinition<DataParserDefinitionRecord, NeverCoalescing<GenericDefinition, {}> & {
    key: GenericDataParserKey;
    value: GenericDataParserValue;
}>>;
export {};
