import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser } from "../base";
import { type MergeDefinition } from "../types";
export interface DataParserDefinitionUnknown extends DataParserDefinition<never> {
}
export declare const dataParserUnknownKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/unknown", unknown>>;
type _DataParserUnknown<GenericDefinition extends DataParserDefinitionUnknown> = (DataParser<GenericDefinition, unknown, unknown> & Kind<typeof dataParserUnknownKind.definition>);
export interface DataParserUnknown<GenericDefinition extends DataParserDefinitionUnknown = DataParserDefinitionUnknown> extends _DataParserUnknown<GenericDefinition> {
}
export declare function unknown<const GenericDefinition extends Partial<DataParserDefinitionUnknown> = never>(definition?: GenericDefinition): DataParserUnknown<MergeDefinition<DataParserDefinitionUnknown, NeverCoalescing<GenericDefinition, {}>>>;
export {};
