import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type Memoized } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserLazyCheckerCustom<GenericInput extends unknown = unknown> {
}
export type DataParserLazyCheckers<GenericInput extends unknown = unknown> = (DataParserLazyCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserLazyCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionLazy extends DataParserDefinition<DataParserLazyCheckers> {
    getter: Memoized<DataParser>;
}
export declare const lazyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/lazy", unknown>>;
type _DataParserLazy<GenericDefinition extends DataParserDefinitionLazy> = (DataParser<GenericDefinition, Output<GenericDefinition["getter"]["value"]>, Input<GenericDefinition["getter"]["value"]>> & Kind<typeof lazyKind.definition>);
export interface DataParserLazy<GenericDefinition extends DataParserDefinitionLazy = DataParserDefinitionLazy> extends _DataParserLazy<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserLazyCheckers<Output<this>>,
        ...DataParserLazyCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserLazyCheckers<Output<this>>,
        ...DataParserLazyCheckers<Output<this>>[]
    ], GenericChecker>): DataParserLazy<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    construct<const GenericDefinition extends DataParserDefinitionLazy>(definition: GenericDefinition): DataParserLazy<MergeDefinition<DataParserDefinitionLazy, GenericDefinition>>;
}
export declare function lazy<GenericDataParser extends DataParser, const GenericDefinition extends Partial<DataParserDefinitionLazy> = never>(getter: () => GenericDataParser, definition?: GenericDefinition): DataParserLazy<MergeDefinition<DataParserDefinitionLazy, NeverCoalescing<GenericDefinition, {}> & {
    getter: Memoized<GenericDataParser>;
}>>;
export declare namespace lazy {
    var overrideHandler: import("../../common").OverrideHandler<DataParserLazyCheckerCustom<unknown>>;
}
export {};
