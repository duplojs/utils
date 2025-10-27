import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser } from "../base";
import { type MergeDefinition } from "../types";
export interface DataParserDefinitionBoolean extends DataParserDefinition<never> {
    readonly coerce: boolean;
}
export declare const dataParserBooleanKind: import("../../common").KindHandler<import("../../common").KindDefinition<"data-parser-boolean", unknown>>;
type _DataParserBoolean<GenericDefinition extends DataParserDefinitionBoolean> = (DataParser<GenericDefinition, boolean, boolean> & Kind<typeof dataParserBooleanKind.definition>);
export interface DataParserBoolean<GenericDefinition extends DataParserDefinitionBoolean = DataParserDefinitionBoolean> extends _DataParserBoolean<GenericDefinition> {
}
export declare function boolean<const GenericDefinition extends Partial<DataParserDefinitionBoolean> = never>(definition?: GenericDefinition): DataParserBoolean<MergeDefinition<DataParserDefinitionBoolean, NeverCoalescing<GenericDefinition, {}>>>;
export {};
