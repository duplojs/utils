import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserDateExtended<GenericDefinition extends dataParsers.DataParserDefinitionDate> = (dataParsers.DataParserDate<GenericDefinition> & DataParserExtended);
export interface DataParserDateExtended<GenericDefinition extends dataParsers.DataParserDefinitionDate = dataParsers.DataParserDefinitionDate> extends _DataParserDateExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserDateCheckers,
        ...dataParsers.DataParserDateCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserDateCheckers,
        ...dataParsers.DataParserDateCheckers[]
    ], GenericChecker>): DataParserDateExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserDateExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function date<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionDate> = never>(definition?: GenericDefinition): DataParserDateExtended<MergeDefinition<dataParsers.DataParserDefinitionDate, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace date {
    var overrideHandler: import("../../common").OverrideHandler<DataParserDateExtended<dataParsers.DataParserDefinitionDate>>;
}
export {};
