import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserNilCheckerCustom {
}
export type DataParserNilCheckers = (DataParserNilCheckerCustom[GetPropsWithValueExtends<DataParserNilCheckerCustom, DataParserChecker>] | CheckerRefineImplementation<null>);
export interface DataParserDefinitionNil extends DataParserDefinition<DataParserNilCheckers> {
    readonly coerce: boolean;
}
export declare const nilKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/nil", unknown>>;
type _DataParserNil<GenericDefinition extends DataParserDefinitionNil> = (DataParser<GenericDefinition, null, null> & Kind<typeof nilKind.definition>);
export interface DataParserNil<GenericDefinition extends DataParserDefinitionNil = DataParserDefinitionNil> extends _DataParserNil<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserNilCheckers,
        ...DataParserNilCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserNilCheckers,
        ...DataParserNilCheckers[]
    ], GenericChecker>): DataParserNil<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function nil<const GenericDefinition extends Partial<DataParserDefinitionNil> = never>(definition?: GenericDefinition): DataParserNil<MergeDefinition<DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}>>>;
export {};
