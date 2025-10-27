import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser } from "../base";
import { type MergeDefinition } from "../types";
export type LiteralValue = string | number | bigint | undefined | null | boolean;
export interface DataParserDefinitionLiteral extends DataParserDefinition<never> {
    readonly value: LiteralValue[];
}
export declare const dataParserLiteralKind: import("../../common").KindHandler<import("../../common").KindDefinition<"data-parser-literal", unknown>>;
type _DataParserLiteral<GenericDefinition extends DataParserDefinitionLiteral> = (DataParser<GenericDefinition, GenericDefinition["value"][number], GenericDefinition["value"][number]> & Kind<typeof dataParserLiteralKind.definition>);
export interface DataParserLiteral<GenericDefinition extends DataParserDefinitionLiteral = DataParserDefinitionLiteral> extends _DataParserLiteral<GenericDefinition> {
}
export declare function literal<const GenericValue extends LiteralValue, const GenericDefinition extends Partial<Omit<DataParserDefinitionLiteral, "value">> = never>(value: GenericValue | GenericValue[], definition?: GenericDefinition): DataParserLiteral<MergeDefinition<DataParserDefinitionLiteral, NeverCoalescing<GenericDefinition, {}> & {
    value: GenericValue[];
}>>;
export {};
