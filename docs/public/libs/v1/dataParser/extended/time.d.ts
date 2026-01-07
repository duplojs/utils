import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
import { type TheTime } from "../../date";
type _DataParserTimeExtended<GenericDefinition extends dataParsers.DataParserDefinitionTime> = (Kind<typeof dataParsers.timeKind.definition> & DataParserExtended<GenericDefinition, TheTime, TheTime>);
export interface DataParserTimeExtended<GenericDefinition extends dataParsers.DataParserDefinitionTime = dataParsers.DataParserDefinitionTime> extends _DataParserTimeExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserTimeCheckers,
        ...dataParsers.DataParserTimeCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserTimeCheckers,
        ...dataParsers.DataParserTimeCheckers[]
    ], GenericChecker>): DataParserTimeExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionTime>(definition: GenericDefinition): DataParserTimeExtended<MergeDefinition<dataParsers.DataParserDefinitionTime, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserTimeExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
    min(min: TheTime, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionTimeMin, "min">>): DataParserTimeExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerTimeMin
    ]>>;
    max(max: TheTime, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionTimeMax, "max">>): DataParserTimeExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerTimeMax
    ]>>;
}
export declare function time<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionTime> = never>(definition?: GenericDefinition): DataParserTimeExtended<MergeDefinition<dataParsers.DataParserDefinitionTime, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace time {
    var overrideHandler: import("../../common").OverrideHandler<DataParserTimeExtended<dataParsers.DataParserDefinitionTime>>;
}
export {};
