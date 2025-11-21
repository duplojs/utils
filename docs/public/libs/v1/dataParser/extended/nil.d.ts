import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserNilExtended<GenericDefinition extends dataParsers.DataParserDefinitionNil> = (dataParsers.DataParserNil<GenericDefinition> & DataParserExtended);
export interface DataParserNilExtended<GenericDefinition extends dataParsers.DataParserDefinitionNil = dataParsers.DataParserDefinitionNil> extends _DataParserNilExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserNilCheckers,
        ...dataParsers.DataParserNilCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserNilCheckers,
        ...dataParsers.DataParserNilCheckers[]
    ], GenericChecker>): DataParserNilExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserNilExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function nil<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionNil> = never>(definition?: GenericDefinition): DataParserNilExtended<MergeDefinition<dataParsers.DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}>>>;
export {};
