import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";
type _DataParserRecordExtended<GenericDefinition extends dataParsers.DataParserDefinitionRecord> = (Kind<typeof dataParsers.recordKind.definition> & DataParserExtended<GenericDefinition, Output<dataParsers.DataParserRecord<GenericDefinition>>, Input<dataParsers.DataParserRecord<GenericDefinition>>>);
export interface DataParserRecordExtended<GenericDefinition extends dataParsers.DataParserDefinitionRecord = dataParsers.DataParserDefinitionRecord> extends _DataParserRecordExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserRecordCheckers<Output<this>>,
        ...dataParsers.DataParserRecordCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserRecordCheckers<Output<this>>,
        ...dataParsers.DataParserRecordCheckers<Output<this>>[]
    ], GenericChecker>): DataParserRecordExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserRecordExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended data parser for records with key and value parsers.
 * 
 * **Supported call styles:**
 * - Method: `DPE.record(key, value, definition?)` -> returns a record parser
 * 
 * Validates objects by parsing each key and value with the provided parsers.
 * 
 * ```ts
 * const parser = DPE.record(DPE.string(), DPE.number());
 * const result = parser.parse({
 * 	aKey: 1,
 * 	bKey: 2,
 * });
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: Partial<Record<string, number>>
 * }
 * 
 * const keyUnion = DPE.union([DPE.literal("xPos"), DPE.literal("yPos")]);
 * const strictKeys = DPE.record(keyUnion, DPE.boolean());
 * const strictResult = strictKeys.parse({
 * 	xPos: true,
 * 	yPos: false,
 * });
 * 
 * const withTemplate = DPE.record(
 * 	DPE.templateLiteral(["id-", DPE.number()]),
 * 	DPE.string(),
 * );
 * const templateResult = withTemplate.parse({ "id-1": "value" });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/record
 * 
 * @namespace DPE
 * 
 */
export declare function record<GenericDataParserKey extends dataParsers.DataParserRecordKey, GenericDataParserValue extends DataParser, const GenericDefinition extends Partial<dataParsers.DataParserDefinitionRecord> = never>(key: GenericDataParserKey, value: GenericDataParserValue, definition?: GenericDefinition): DataParserRecordExtended<MergeDefinition<dataParsers.DataParserDefinitionRecord, NeverCoalescing<GenericDefinition, {}> & {
    key: GenericDataParserKey;
    value: GenericDataParserValue;
}>>;
export declare namespace record {
    var overrideHandler: import("../../common").OverrideHandler<DataParserRecordExtended<dataParsers.DataParserDefinitionRecord>>;
}
export {};
