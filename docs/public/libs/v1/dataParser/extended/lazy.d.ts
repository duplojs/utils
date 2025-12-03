import { type Kind, type Memoized, type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";
type _DataParserLazyExtended<GenericDefinition extends dataParsers.DataParserDefinitionLazy> = (Kind<typeof dataParsers.lazyKind.definition> & DataParserExtended<GenericDefinition, Output<GenericDefinition["getter"]["value"]>, Input<GenericDefinition["getter"]["value"]>>);
export interface DataParserLazyExtended<GenericDefinition extends dataParsers.DataParserDefinitionLazy = dataParsers.DataParserDefinitionLazy> extends _DataParserLazyExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserLazyCheckers<Output<this>>,
        ...dataParsers.DataParserLazyCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserLazyCheckers<Output<this>>,
        ...dataParsers.DataParserLazyCheckers<Output<this>>[]
    ], GenericChecker>): DataParserLazyExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserLazyExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function lazy<GenericDataParser extends DataParser, const GenericDefinition extends Partial<dataParsers.DataParserDefinitionLazy> = never>(getter: () => GenericDataParser, definition?: GenericDefinition): DataParserLazyExtended<MergeDefinition<dataParsers.DataParserDefinitionLazy, NeverCoalescing<GenericDefinition, {}> & {
    getter: Memoized<GenericDataParser>;
}>>;
export declare namespace lazy {
    var overrideHandler: import("../../common").OverrideHandler<DataParserLazyExtended<dataParsers.DataParserDefinitionLazy>>;
}
export {};
