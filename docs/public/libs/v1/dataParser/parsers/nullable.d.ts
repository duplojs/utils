import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer, type IsEqual } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserNullableCheckerCustom<GenericInput extends unknown = unknown> {
}
export type DataParserNullableCheckers<GenericInput extends unknown = unknown> = (DataParserNullableCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserNullableCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionNullable<GenericCoalescingValue extends unknown = unknown> extends DataParserDefinition<DataParserNullableCheckers> {
    readonly inner: DataParser;
    readonly coalescingValue: GenericCoalescingValue;
}
export declare const nullableKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/nullable", unknown>>;
type _DataParserNullable<GenericDefinition extends DataParserDefinitionNullable> = (DataParser<GenericDefinition, IsEqual<GenericDefinition["coalescingValue"], unknown> extends true ? Output<GenericDefinition["inner"]> | null : Output<GenericDefinition["inner"]>, Input<GenericDefinition["inner"]> | null> & Kind<typeof nullableKind.definition>);
export interface DataParserNullable<GenericDefinition extends DataParserDefinitionNullable = DataParserDefinitionNullable> extends _DataParserNullable<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserNullableCheckers<Output<this>>,
        ...DataParserNullableCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserNullableCheckers<Output<this>>,
        ...DataParserNullableCheckers<Output<this>>[]
    ], GenericChecker>): DataParserNullable<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function nullable<GenericDataParser extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionNullable<Output<GenericDataParser> | null>, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserNullable<MergeDefinition<DataParserDefinitionNullable, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export {};
