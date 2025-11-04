import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type MergeDefinition } from "../../dataParser/types";
export type UnionOptions = readonly [DataParser, ...DataParser[]];
export interface DataParserDefinitionUnion extends DataParserDefinition<never> {
    readonly options: UnionOptions;
}
export declare const unionKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/union", unknown>>;
type _DataParserUnion<GenericDefinition extends DataParserDefinitionUnion> = (DataParser<GenericDefinition, Output<GenericDefinition["options"][number]>, Input<GenericDefinition["options"][number]>> & Kind<typeof unionKind.definition>);
export interface DataParserUnion<GenericDefinition extends DataParserDefinitionUnion = DataParserDefinitionUnion> extends _DataParserUnion<GenericDefinition> {
}
export declare function union<GenericOptions extends UnionOptions, const GenericDefinition extends Partial<Omit<DataParserDefinitionUnion, "options">> = never>(options: GenericOptions, definition?: GenericDefinition): DataParserUnion<MergeDefinition<DataParserDefinitionUnion, NeverCoalescing<GenericDefinition, {}> & {
    options: GenericOptions;
}>>;
export {};
