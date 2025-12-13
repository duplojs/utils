import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export type LiteralValue = string | number | bigint | undefined | null | boolean;
export interface DataParserLiteralCheckerCustom<GenericInput extends LiteralValue = LiteralValue> {
}
export type DataParserLiteralCheckers<GenericInput extends LiteralValue = LiteralValue> = (DataParserLiteralCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserLiteralCheckerCustom<GenericInput>, DataParserChecker>] | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionLiteral extends DataParserDefinition<DataParserLiteralCheckers> {
    readonly value: readonly LiteralValue[];
}
export declare const literalKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/literal", unknown>>;
type _DataParserLiteral<GenericDefinition extends DataParserDefinitionLiteral> = (DataParser<GenericDefinition, GenericDefinition["value"][number], GenericDefinition["value"][number]> & Kind<typeof literalKind.definition>);
export interface DataParserLiteral<GenericDefinition extends DataParserDefinitionLiteral = DataParserDefinitionLiteral> extends _DataParserLiteral<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserLiteralCheckers<Output<this>>,
        ...DataParserLiteralCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserLiteralCheckers<Output<this>>,
        ...DataParserLiteralCheckers<Output<this>>[]
    ], GenericChecker>): DataParserLiteral<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function literal<const GenericValue extends LiteralValue, const GenericDefinition extends Partial<Omit<DataParserDefinitionLiteral, "value">> = never>(value: GenericValue | GenericValue[], definition?: GenericDefinition): DataParserLiteral<MergeDefinition<DataParserDefinitionLiteral, NeverCoalescing<GenericDefinition, {}> & {
    value: GenericValue[];
}>>;
export declare namespace literal {
    var overrideHandler: import("../../common").OverrideHandler<DataParserLiteral<DataParserDefinitionLiteral>>;
}
export {};
