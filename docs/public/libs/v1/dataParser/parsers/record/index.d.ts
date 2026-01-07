import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type Adaptor } from "../../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../types";
import { type DataParserString } from "../string";
import { type DataParserTemplateLiteral } from "../templateLiteral";
import { type DataParserLiteral } from "../literal";
import { type DataParserDefinitionNumber, type DataParserNumber } from "../number";
import { type DataParserDefinitionUnion, type DataParserUnion } from "../union";
import { type CheckerRefineImplementation } from "../refine";
import { type TemplateLiteralContainLargeType } from "../../../string";
import { type GetPropsWithValueExtends } from "../../../object";
export * from "./findRecordRequiredKey";
export type DataParserRecordKey = (DataParserString | DataParserTemplateLiteral | DataParserLiteral | DataParserNumber<DataParserDefinitionNumber & {
    coerce: true;
}> | DataParserUnion<DataParserDefinitionUnion & {
    options: DataParserRecordKey[];
}>);
export interface DataParserRecordCheckerCustom<GenericInput extends Record<string, unknown> = Record<string, unknown>> {
}
export type DataParserRecordCheckers<GenericInput extends Record<string, unknown> = Record<string, unknown>> = (DataParserRecordCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserRecordCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionRecord extends DataParserDefinition<DataParserRecordCheckers> {
    readonly key: DataParserRecordKey;
    readonly value: DataParser;
    readonly requireKey: string[] | null;
}
export declare const recordKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/record", unknown>>;
export type DataParserRecordShapeOutput<GenericDataParserKey extends DataParserRecordKey, GenericDataParserValue extends DataParser> = Extract<Record<Output<GenericDataParserKey> extends infer InferredKey extends string | number ? `${InferredKey}` : never, Output<GenericDataParserValue> extends infer InferredValue ? InferredValue : never>, any>;
export type DataParserRecordShapeInput<GenericDataParserKey extends DataParserRecordKey, GenericDataParserValue extends DataParser> = Extract<Record<Input<GenericDataParserKey> extends infer InferredKey extends string | number ? `${InferredKey}` : never, Input<GenericDataParserValue> extends infer InferredValue ? InferredValue : never>, any>;
type _DataParserRecord<GenericDefinition extends DataParserDefinitionRecord> = (DataParser<GenericDefinition, DataParserRecordShapeOutput<GenericDefinition["key"], GenericDefinition["value"]> extends infer InferredOutput extends Record<string, unknown> ? TemplateLiteralContainLargeType<Adaptor<keyof InferredOutput, string>> extends true ? Partial<InferredOutput> : InferredOutput : never, DataParserRecordShapeInput<GenericDefinition["key"], GenericDefinition["value"]> extends infer InferredInput extends Record<string, unknown> ? TemplateLiteralContainLargeType<Adaptor<keyof InferredInput, string>> extends true ? Partial<InferredInput> : InferredInput : never> & Kind<typeof recordKind.definition>);
export interface DataParserRecord<GenericDefinition extends DataParserDefinitionRecord = DataParserDefinitionRecord> extends _DataParserRecord<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserRecordCheckers<Output<this>>,
        ...DataParserRecordCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserRecordCheckers<Output<this>>,
        ...DataParserRecordCheckers<Output<this>>[]
    ], GenericChecker>): DataParserRecord<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionRecord>(definition: GenericDefinition): DataParserRecord<MergeDefinition<DataParserDefinitionRecord, GenericDefinition>>;
}
export declare function record<GenericDataParserKey extends DataParserRecordKey, GenericDataParserValue extends DataParser, const GenericDefinition extends Partial<DataParserDefinitionRecord> = never>(key: GenericDataParserKey, value: GenericDataParserValue, definition?: GenericDefinition): DataParserRecord<MergeDefinition<DataParserDefinitionRecord, NeverCoalescing<GenericDefinition, {}> & {
    key: GenericDataParserKey;
    value: GenericDataParserValue;
}>>;
export declare namespace record {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserRecord<DataParserDefinitionRecord>>;
}
