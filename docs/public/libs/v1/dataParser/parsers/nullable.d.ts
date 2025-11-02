import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type MergeDefinition } from "../../dataParser/types";
export interface DataParserDefinitionNullable extends DataParserDefinition<never> {
    readonly inner: DataParser;
}
export declare const nullableKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/nullable", unknown>>;
type _DataParserNullable<GenericDefinition extends DataParserDefinitionNullable> = (DataParser<GenericDefinition, Output<GenericDefinition["inner"]> | null, Input<GenericDefinition["inner"]> | null> & Kind<typeof nullableKind.definition>);
export interface DataParserNullable<GenericDefinition extends DataParserDefinitionNullable = DataParserDefinitionNullable> extends _DataParserNullable<GenericDefinition> {
}
export declare function nullable<GenericDataParser extends DataParser, const GenericDefinition extends Partial<Omit<DataParserDefinitionNullable, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserNullable<MergeDefinition<DataParserDefinitionNullable, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export {};
