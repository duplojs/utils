import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserUnionExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnion> = (dataParsers.DataParserUnion<GenericDefinition> & DataParserExtended);
export interface DataParserUnionExtended<GenericDefinition extends dataParsers.DataParserDefinitionUnion = dataParsers.DataParserDefinitionUnion> extends _DataParserUnionExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserUnionCheckers<Output<this>>,
        ...dataParsers.DataParserUnionCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserUnionCheckers<Output<this>>,
        ...dataParsers.DataParserUnionCheckers<Output<this>>[]
    ], GenericChecker>): DataParserUnionExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserUnionExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function union<GenericOptions extends dataParsers.UnionOptions, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionUnion, "options">> = never>(options: GenericOptions, definition?: GenericDefinition): DataParserUnionExtended<MergeDefinition<dataParsers.DataParserDefinitionUnion, NeverCoalescing<GenericDefinition, {}> & {
    options: GenericOptions;
}>>;
export declare namespace union {
    var overrideHandler: import("../../common").OverrideHandler<DataParserUnionExtended<dataParsers.DataParserDefinitionUnion>>;
}
export {};
