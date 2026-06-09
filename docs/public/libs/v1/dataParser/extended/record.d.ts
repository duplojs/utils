import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserRecordExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserRecord>;
export declare class DataParserRecordExtended<GenericDefinition extends dataParsers.DataParserDefinitionRecord = dataParsers.DataParserDefinitionRecord> extends DataParserRecordExtended_base<GenericDefinition, Output<dataParsers.DataParserRecord<GenericDefinition>>, Input<dataParsers.DataParserRecord<GenericDefinition>>> {
    get classConstructor(): typeof DataParserRecordExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserRecordExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserRecordExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
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
    static create<GenericDataParserKey extends dataParsers.DataParserRecordKey, GenericDataParserValue extends DataParser, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionRecord<Record<Extract<Output<GenericDataParserKey>, string | number>, Output<GenericDataParserValue>>>, "key" | "value" | "baseData"> = never>(key: GenericDataParserKey, value: GenericDataParserValue, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionRecord<Record<Extract<Output<GenericDataParserKey>, string | number>, Output<GenericDataParserValue>>>, "key" | "value" | "baseData">, GenericDefinition>): DataParserRecordExtended<MergeDefinition<dataParsers.DataParserDefinitionRecord, NeverCoalescing<GenericDefinition, {}> & {
        key: GenericDataParserKey;
        value: GenericDataParserValue;
    }>>;
}
export declare const record: typeof DataParserRecordExtended.create;
export {};
