import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserBooleanExtended<GenericDefinition extends dataParsers.DataParserDefinitionBoolean> = (dataParsers.DataParserBoolean<GenericDefinition> & DataParserExtended);
export interface DataParserBooleanExtended<GenericDefinition extends dataParsers.DataParserDefinitionBoolean = dataParsers.DataParserDefinitionBoolean> extends _DataParserBooleanExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserBooleanCheckers,
        ...dataParsers.DataParserBooleanCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserBooleanCheckers,
        ...dataParsers.DataParserBooleanCheckers[]
    ], GenericChecker>): DataParserBooleanExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserBooleanExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function boolean<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionBoolean> = never>(definition?: GenericDefinition): DataParserBooleanExtended<MergeDefinition<dataParsers.DataParserDefinitionBoolean, NeverCoalescing<GenericDefinition, {}>>>;
export {};
