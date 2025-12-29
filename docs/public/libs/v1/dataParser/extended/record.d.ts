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
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionRecord>(definition: GenericDefinition): DataParserRecordExtended<MergeDefinition<dataParsers.DataParserDefinitionRecord, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserRecordExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function record<GenericDataParserKey extends dataParsers.DataParserRecordKey, GenericDataParserValue extends DataParser, const GenericDefinition extends Partial<dataParsers.DataParserDefinitionRecord> = never>(key: GenericDataParserKey, value: GenericDataParserValue, definition?: GenericDefinition): DataParserRecordExtended<MergeDefinition<dataParsers.DataParserDefinitionRecord, NeverCoalescing<GenericDefinition, {}> & {
    key: GenericDataParserKey;
    value: GenericDataParserValue;
}>>;
export declare namespace record {
    var overrideHandler: import("../../common").OverrideHandler<DataParserRecordExtended<dataParsers.DataParserDefinitionRecord>>;
}
export {};
