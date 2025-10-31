import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type DataParsers, type MergeDefinition } from "../types";
export interface DataParserDefinitionLazy extends DataParserDefinition<never> {
    getter(): DataParsers;
}
export declare const dataParserLazyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/lazy", unknown>>;
type _DataParserLazy<GenericDefinition extends DataParserDefinitionLazy> = (DataParser<GenericDefinition, Output<ReturnType<GenericDefinition["getter"]>>, Input<ReturnType<GenericDefinition["getter"]>>> & Kind<typeof dataParserLazyKind.definition>);
export interface DataParserLazy<GenericDefinition extends DataParserDefinitionLazy = DataParserDefinitionLazy> extends _DataParserLazy<GenericDefinition> {
}
export declare function lazy<GenericDataParser extends DataParsers, const GenericDefinition extends Partial<DataParserDefinitionLazy> = never>(getter: () => GenericDataParser, definition?: GenericDefinition): DataParserLazy<MergeDefinition<DataParserDefinitionLazy, NeverCoalescing<GenericDefinition, {}> & {
    getter(): GenericDataParser;
}>>;
export {};
