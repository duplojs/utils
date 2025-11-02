import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type MergeDefinition } from "../../dataParser/types";
export interface DataParserDefinitionLazy extends DataParserDefinition<never> {
    getter(): DataParser;
}
export declare const lazyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/lazy", unknown>>;
type _DataParserLazy<GenericDefinition extends DataParserDefinitionLazy> = (DataParser<GenericDefinition, Output<ReturnType<GenericDefinition["getter"]>>, Input<ReturnType<GenericDefinition["getter"]>>> & Kind<typeof lazyKind.definition>);
export interface DataParserLazy<GenericDefinition extends DataParserDefinitionLazy = DataParserDefinitionLazy> extends _DataParserLazy<GenericDefinition> {
}
export declare function lazy<GenericDataParser extends DataParser, const GenericDefinition extends Partial<DataParserDefinitionLazy> = never>(getter: () => GenericDataParser, definition?: GenericDefinition): DataParserLazy<MergeDefinition<DataParserDefinitionLazy, NeverCoalescing<GenericDefinition, {}> & {
    getter(): GenericDataParser;
}>>;
export {};
