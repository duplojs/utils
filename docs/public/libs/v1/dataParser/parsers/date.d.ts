import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
import { type TheDate } from "../../date";
export interface DataParserDateCheckerCustom {
}
export type DataParserDateCheckers = (DataParserDateCheckerCustom[GetPropsWithValueExtends<DataParserDateCheckerCustom, DataParserChecker>] | CheckerRefineImplementation<TheDate>);
export interface DataParserDefinitionDate extends DataParserDefinition<DataParserDateCheckers> {
    readonly coerce: boolean;
}
export declare const dateKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/date", unknown>>;
type _DataParserDate<GenericDefinition extends DataParserDefinitionDate> = (DataParser<GenericDefinition, TheDate, TheDate> & Kind<typeof dateKind.definition>);
export interface DataParserDate<GenericDefinition extends DataParserDefinitionDate = DataParserDefinitionDate> extends _DataParserDate<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserDateCheckers,
        ...DataParserDateCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserDateCheckers,
        ...DataParserDateCheckers[]
    ], GenericChecker>): DataParserDate<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function date<const GenericDefinition extends Partial<DataParserDefinitionDate> = never>(definition?: GenericDefinition): DataParserDate<MergeDefinition<DataParserDefinitionDate, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace date {
    var overrideHandler: import("../../common").OverrideHandler<DataParserDate<DataParserDefinitionDate>>;
}
export {};
