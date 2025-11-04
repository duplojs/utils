import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type MergeDefinition } from "../../dataParser/types";
export interface DataParserDefinitionOptional extends DataParserDefinition<never> {
    readonly inner: DataParser;
}
export declare const optionalKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/optional", unknown>>;
type _DataParserOptional<GenericDefinition extends DataParserDefinitionOptional> = (DataParser<GenericDefinition, Output<GenericDefinition["inner"]> | undefined, Input<GenericDefinition["inner"]> | undefined> & Kind<typeof optionalKind.definition>);
export interface DataParserOptional<GenericDefinition extends DataParserDefinitionOptional = DataParserDefinitionOptional> extends _DataParserOptional<GenericDefinition> {
}
export declare function optional<GenericDataParser extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionOptional, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserOptional<MergeDefinition<DataParserDefinitionOptional, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export {};
