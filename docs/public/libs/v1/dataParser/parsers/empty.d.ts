import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser } from "../base";
import { type MergeDefinition } from "../types";
export interface DataParserDefinitionEmpty extends DataParserDefinition<never> {
    readonly coerce: boolean;
}
export declare const dataParserEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"data-parser-empty", unknown>>;
type _DataParserEmpty<GenericDefinition extends DataParserDefinitionEmpty> = (DataParser<GenericDefinition, undefined, undefined> & Kind<typeof dataParserEmptyKind.definition>);
export interface DataParserEmpty<GenericDefinition extends DataParserDefinitionEmpty = DataParserDefinitionEmpty> extends _DataParserEmpty<GenericDefinition> {
}
export declare function empty<const GenericDefinition extends Partial<DataParserDefinitionEmpty> = never>(definition?: GenericDefinition): DataParserEmpty<MergeDefinition<DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}>>>;
export {};
