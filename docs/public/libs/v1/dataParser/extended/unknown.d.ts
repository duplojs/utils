import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserUnknownExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnknown> = (dataParsers.DataParserUnknown<GenericDefinition> & DataParserExtended);
export interface DataParserUnknownExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnknown = dataParsers.DataParserDefinitionUnknown> extends _DataParserUnknownExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserUnknownCheckers,
        ...dataParsers.DataParserUnknownCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserUnknownCheckers,
        ...dataParsers.DataParserUnknownCheckers[]
    ], GenericChecker>): DataParserUnknownExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserUnknownExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function unknown<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionUnknown> = never>(definition?: GenericDefinition): DataParserUnknownExtended<MergeDefinition<dataParsers.DataParserDefinitionUnknown, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace unknown {
    var overrideHandler: import("../../common").OverrideHandler<DataParserUnknownExtended<dataParsers.DataParserDefinitionUnknown>>;
}
export {};
