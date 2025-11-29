import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type IsEqual } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserOptionalCheckerCustom<GenericInput extends unknown = unknown> {
}
export type DataParserOptionalCheckers<GenericInput extends unknown = unknown> = (DataParserOptionalCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserOptionalCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionOptional<GenericCoalescingValue extends unknown = unknown> extends DataParserDefinition<DataParserOptionalCheckers> {
    readonly inner: DataParser;
    readonly coalescingValue: GenericCoalescingValue;
}
export declare const optionalKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/optional", unknown>>;
type _DataParserOptional<GenericDefinition extends DataParserDefinitionOptional> = (DataParser<GenericDefinition, IsEqual<GenericDefinition["coalescingValue"], unknown> extends true ? Output<GenericDefinition["inner"]> | undefined : Output<GenericDefinition["inner"]>, Input<GenericDefinition["inner"]> | undefined> & Kind<typeof optionalKind.definition>);
export interface DataParserOptional<GenericDefinition extends DataParserDefinitionOptional = DataParserDefinitionOptional> extends _DataParserOptional<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserOptionalCheckers<Output<this>>,
        ...DataParserOptionalCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserOptionalCheckers<Output<this>>,
        ...DataParserOptionalCheckers<Output<this>>[]
    ], GenericChecker>): DataParserOptional<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function optional<GenericDataParser extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionOptional<Output<GenericDataParser> | undefined>, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserOptional<MergeDefinition<DataParserDefinitionOptional, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export declare namespace optional {
    var overrideHandler: import("../../common").OverrideHandler<DataParserOptional<DataParserDefinitionOptional<unknown>>>;
}
export {};
