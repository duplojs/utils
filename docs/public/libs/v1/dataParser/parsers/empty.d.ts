import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser } from "../base";
import { type MergeDefinition } from "../../dataParser/types";
export interface DataParserDefinitionEmpty extends DataParserDefinition<never> {
    readonly coerce: boolean;
}
export declare const emptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/empty", unknown>>;
type _DataParserEmpty<GenericDefinition extends DataParserDefinitionEmpty> = (DataParser<GenericDefinition, undefined, undefined> & Kind<typeof emptyKind.definition>);
export interface DataParserEmpty<GenericDefinition extends DataParserDefinitionEmpty = DataParserDefinitionEmpty> extends _DataParserEmpty<GenericDefinition> {
}
export declare function empty<const GenericDefinition extends Partial<DataParserDefinitionEmpty> = never>(definition?: GenericDefinition): DataParserEmpty<MergeDefinition<DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}>>>;
export {};
