import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type DataParsers, type MergeDefinition } from "../types";
export interface DataParserDefinitionOptional extends DataParserDefinition<never> {
    readonly inner: DataParsers;
}
export declare const dataParserOptionalKind: import("../../common").KindHandler<import("../../common").KindDefinition<"data-parser-optional", unknown>>;
type _DataParserOptional<GenericDefinition extends DataParserDefinitionOptional> = (DataParser<GenericDefinition, Output<GenericDefinition["inner"]> | undefined, Input<GenericDefinition["inner"]> | undefined> & Kind<typeof dataParserOptionalKind.definition>);
export interface DataParserOptional<GenericDefinition extends DataParserDefinitionOptional = DataParserDefinitionOptional> extends _DataParserOptional<GenericDefinition> {
}
export declare function optional<GenericDataParser extends DataParsers, const GenericDefinition extends Partial<Omit<DataParserDefinitionOptional, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserOptional<MergeDefinition<DataParserDefinitionOptional, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export {};
