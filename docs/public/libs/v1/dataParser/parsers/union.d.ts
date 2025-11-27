import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export type UnionOptions = readonly [DataParser, ...DataParser[]];
export interface DataParserUnionCheckerCustom<GenericInput extends unknown = unknown> {
}
export type DataParserUnionCheckers<GenericInput extends unknown = unknown> = (DataParserUnionCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserUnionCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionUnion extends DataParserDefinition<DataParserUnionCheckers> {
    readonly options: UnionOptions;
}
export declare const unionKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/union", unknown>>;
type _DataParserUnion<GenericDefinition extends DataParserDefinitionUnion> = (DataParser<GenericDefinition, Output<GenericDefinition["options"][number]>, Input<GenericDefinition["options"][number]>> & Kind<typeof unionKind.definition>);
export interface DataParserUnion<GenericDefinition extends DataParserDefinitionUnion = DataParserDefinitionUnion> extends _DataParserUnion<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserUnionCheckers<Output<this>>,
        ...DataParserUnionCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserUnionCheckers<Output<this>>,
        ...DataParserUnionCheckers<Output<this>>[]
    ], GenericChecker>): DataParserUnion<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function union<GenericOptions extends UnionOptions, const GenericDefinition extends Partial<Omit<DataParserDefinitionUnion, "options">> = never>(options: GenericOptions, definition?: GenericDefinition): DataParserUnion<MergeDefinition<DataParserDefinitionUnion, NeverCoalescing<GenericDefinition, {}> & {
    options: GenericOptions;
}>>;
export {};
