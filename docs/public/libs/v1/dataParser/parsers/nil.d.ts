import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser } from "../base";
import { type MergeDefinition } from "../types";
export interface DataParserDefinitionNil extends DataParserDefinition<never> {
    readonly coerce: boolean;
}
export declare const dataParserNilKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/nil", unknown>>;
type _DataParserNil<GenericDefinition extends DataParserDefinitionNil> = (DataParser<GenericDefinition, null, null> & Kind<typeof dataParserNilKind.definition>);
export interface DataParserNil<GenericDefinition extends DataParserDefinitionNil = DataParserDefinitionNil> extends _DataParserNil<GenericDefinition> {
}
export declare function nil<const GenericDefinition extends Partial<DataParserDefinitionNil> = never>(definition?: GenericDefinition): DataParserNil<MergeDefinition<DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}>>>;
export {};
