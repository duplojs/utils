import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type DataParsers, type MergeDefinition } from "../types";
export type UnionOptions = readonly [DataParsers, ...DataParsers[]];
export interface DataParserDefinitionUnion extends DataParserDefinition<never> {
    readonly options: UnionOptions;
}
export declare const dataParserUnionKind: import("../../common").KindHandler<import("../../common").KindDefinition<"data-parser-union", unknown>>;
type _DataParserUnion<GenericDefinition extends DataParserDefinitionUnion> = (DataParser<GenericDefinition, Output<GenericDefinition["options"][number]>, Input<GenericDefinition["options"][number]>> & Kind<typeof dataParserUnionKind.definition>);
export interface DataParserUnion<GenericDefinition extends DataParserDefinitionUnion = DataParserDefinitionUnion> extends _DataParserUnion<GenericDefinition> {
}
export declare function union<GenericOptions extends UnionOptions, const GenericDefinition extends Partial<Omit<DataParserDefinitionUnion, "options">> = never>(options: GenericOptions, definition?: GenericDefinition): DataParserUnion<MergeDefinition<DataParserDefinitionUnion, NeverCoalescing<GenericDefinition, {}> & {
    options: GenericOptions;
}>>;
export {};
