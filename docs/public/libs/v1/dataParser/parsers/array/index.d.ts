import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../types";
import { type DataParserCheckerArrayMin, type DataParserCheckerArrayMax } from "./checkers";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "../../../object";
export * from "./checkers";
export interface DataParserArrayCheckerCustom<GenericInput extends unknown[] = unknown[]> {
}
export type DataParserArrayCheckers<GenericInput extends unknown[] = unknown[]> = (DataParserArrayCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserArrayCheckerCustom<GenericInput>, DataParserChecker>] | DataParserCheckerArrayMin | DataParserCheckerArrayMax | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionArray extends DataParserDefinition<DataParserArrayCheckers> {
    readonly element: DataParser;
}
export declare const arrayKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/array", unknown>>;
type _DataParserArray<GenericDefinition extends DataParserDefinitionArray> = (DataParser<GenericDefinition, Output<GenericDefinition["element"]>[], Input<GenericDefinition["element"]>[]> & Kind<typeof arrayKind.definition>);
export interface DataParserArray<GenericDefinition extends DataParserDefinitionArray = DataParserDefinitionArray> extends _DataParserArray<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserArrayCheckers<Output<this>>,
        ...DataParserArrayCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserArrayCheckers<Output<this>>,
        ...DataParserArrayCheckers<Output<this>>[]
    ], GenericChecker>): DataParserArray<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionArray>(definition: GenericDefinition): DataParserArray<MergeDefinition<DataParserDefinitionArray, GenericDefinition>>;
}
export declare function array<GenericElement extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionArray, "element">> = never>(element: GenericElement, definition?: GenericDefinition): DataParserArray<MergeDefinition<DataParserDefinitionArray, NeverCoalescing<GenericDefinition, {}> & {
    element: GenericElement;
}>>;
export declare namespace array {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserArray<DataParserDefinitionArray>>;
}
