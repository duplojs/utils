import { type Kind, type IsEqual, type NeverCoalescing, type Memoized } from "../../common";
import { dataParserKind, type Input, type Output, type DataParser, type DataParserDefinition } from "../base";
import { type MergeDefinition, type DataParsers } from "../types";
import * as DObject from "../../object";
export type DataParserObjectShape = Readonly<Record<string, DataParsers>>;
export type DataParserObjectShapeOutput<GenericShape extends DataParserObjectShape> = IsEqual<GenericShape, DataParserObjectShape> extends true ? DataParserObjectShape : {
    -readonly [Prop in keyof GenericShape as GenericShape[Prop] extends Kind<typeof dataParserKind.definition> ? Prop : never]: Output<GenericShape[Prop]>;
} extends infer InferredResult extends object ? DObject.PartialKeys<InferredResult, DObject.GetPropsWithValueExtends<InferredResult, undefined>> : never;
export type DataParserObjectShapeInput<GenericShape extends DataParserObjectShape> = IsEqual<GenericShape, DataParserObjectShape> extends true ? DataParserObjectShape : {
    -readonly [Prop in keyof GenericShape as GenericShape[Prop] extends Kind<typeof dataParserKind.definition> ? Prop : never]: Input<GenericShape[Prop]>;
} extends infer InferredResult extends object ? DObject.PartialKeys<InferredResult, DObject.GetPropsWithValueExtends<InferredResult, undefined>> : never;
export interface DataParserDefinitionObject extends DataParserDefinition<never> {
    readonly shape: DataParserObjectShape;
    readonly optimizedShape: Memoized<{
        readonly key: string;
        readonly value: DataParsers;
    }[]>;
}
export declare const dataParserObjectKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/object", unknown>>;
type _DataParserObject<GenericDefinition extends DataParserDefinitionObject> = (DataParser<GenericDefinition, DataParserObjectShapeOutput<GenericDefinition["shape"]>, DataParserObjectShapeInput<GenericDefinition["shape"]>> & Kind<typeof dataParserObjectKind.definition>);
export interface DataParserObject<GenericDefinition extends DataParserDefinitionObject = DataParserDefinitionObject> extends _DataParserObject<GenericDefinition> {
}
export declare function object<const GenericShape extends DataParserObjectShape, const GenericDefinition extends Partial<Omit<DataParserDefinitionObject, "shape">> = never>(shape: GenericShape, definition?: GenericDefinition): DataParserObject<MergeDefinition<DataParserDefinitionObject, NeverCoalescing<GenericDefinition, {}> & {
    shape: GenericShape;
}>>;
export {};
