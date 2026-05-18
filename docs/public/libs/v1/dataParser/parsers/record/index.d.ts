import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type IsEqual } from "../../../common";
import { type DataParserDefinition, type DataParserBase, type Output, type Input, type DataParser } from "../../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition } from "../../../dataParser/types";
import { type DataParserString } from "../string";
import { type DataParserTemplateLiteral } from "../templateLiteral";
import { type DataParserDefinitionLiteral, type DataParserLiteral } from "../literal";
import { type DataParserDefinitionNumber, type DataParserNumber } from "../number";
import { type DataParserDefinitionUnion, type DataParserUnion } from "../union";
export * from "./findRecordRequiredKey";
export type DataParserRecordKey = (DataParserString | DataParserTemplateLiteral | DataParserLiteral<Omit<DataParserDefinitionLiteral, "value"> & {
    readonly value: readonly string[];
}> | DataParserNumber<Omit<DataParserDefinitionNumber, "coerce"> & {
    readonly coerce: true;
}> | DataParserUnion<Omit<DataParserDefinitionUnion, "options"> & {
    readonly options: readonly [DataParserRecordKey, ...DataParserRecordKey[]];
}>);
export type DataParserRecordCheckers<GenericInput extends Record<string, unknown> = Record<string, unknown>> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionRecord<GenericInput extends Record<string, unknown> = Record<string, unknown>> extends DataParserDefinition<DataParserRecordCheckers<GenericInput>> {
    readonly key: DataParserRecordKey;
    readonly value: DataParser;
    readonly baseData: Partial<Record<string, undefined>>;
    /**
     * @deprecated replaced by baseData
     */
    readonly requireKey: readonly string[];
}
export declare const recordKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/record", unknown>>;
export type DataParserRecordShapeOutput<GenericDataParserKey extends DataParserRecordKey, GenericDataParserValue extends DataParser> = Extract<Record<Output<GenericDataParserKey> extends infer InferredKey extends string | number ? `${InferredKey}` : never, Output<GenericDataParserValue> extends infer InferredValue ? InferredValue : never> extends infer InferredResult extends Record<string, unknown> ? IsEqual<Extract<InferredResult[keyof InferredResult], undefined>, never> extends true ? InferredResult : Partial<InferredResult> : never, any>;
export type DataParserRecordShapeInput<GenericDataParserKey extends DataParserRecordKey, GenericDataParserValue extends DataParser> = Extract<Record<Input<GenericDataParserKey> extends infer InferredKey extends string | number ? `${InferredKey}` : never, Input<GenericDataParserValue> extends infer InferredValue ? InferredValue : never> extends infer InferredResult extends Record<string, unknown> ? IsEqual<Extract<InferredResult[keyof InferredResult], undefined>, never> extends true ? InferredResult : Partial<InferredResult> : never, any>;
type _DataParserRecord<GenericDefinition extends DataParserDefinitionRecord> = (DataParserBase<GenericDefinition, DataParserRecordShapeOutput<GenericDefinition["key"], GenericDefinition["value"]>, DataParserRecordShapeInput<GenericDefinition["key"], GenericDefinition["value"]>> & Kind<typeof recordKind.definition>);
export interface DataParserRecord<GenericDefinition extends DataParserDefinitionRecord = DataParserDefinitionRecord> extends _DataParserRecord<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserRecordCheckers<Output<this>>,
        ...DataParserRecordCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserRecordCheckers<Output<this>>,
        ...DataParserRecordCheckers<Output<this>>[]
    ], GenericChecker>): DataParserRecord<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
/**
 * Creates a data parser for records with key and value parsers.
 * 
 * **Supported call styles:**
 * - Classic: `DP.record(key, value, definition?)` -> returns a record parser
 * - Curried: not available
 * 
 * Validates that the input is an object and parses each key and value with the provided parsers.
 * 
 * ```ts
 * const parser = DP.record(DP.string(), DP.number());
 * const result = parser.parse({
 * 	aKey: 1,
 * 	bKey: 2,
 * });
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: Record<string, number>
 * }
 * 
 * const keyUnion = DP.union([DP.literal("xPos"), DP.literal("yPos")]);
 * const strictKeys = DP.record(keyUnion, DP.boolean());
 * const strictResult = strictKeys.parse({
 * 	xPos: true,
 * 	yPos: false,
 * });
 * 
 * const withCheckers = DP.record(DP.string(), DP.string(), {
 * 	checkers: [DP.checkerRefine((value) => Object.keys(value).length > 0)],
 * });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/record
 * 
 * @namespace DP
 * 
 */
export declare function record<GenericDataParserKey extends DataParserRecordKey, GenericDataParserValue extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionRecord<Record<Extract<Output<GenericDataParserKey>, string | number>, Output<GenericDataParserValue>>>, "key" | "value" | "baseData" | "requireKey">> = never>(key: GenericDataParserKey, value: GenericDataParserValue, definition?: GenericDefinition): DataParserRecord<MergeDefinition<DataParserDefinitionRecord, NeverCoalescing<GenericDefinition, {}> & {
    key: GenericDataParserKey;
    value: GenericDataParserValue;
}>>;
export declare namespace record {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserRecord<DataParserDefinitionRecord<Record<string, unknown>>>>;
}
