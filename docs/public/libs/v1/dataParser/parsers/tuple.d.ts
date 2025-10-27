import { type UnionContain, type IsEqual, type Kind, type Adaptor, type NeverCoalescing } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type AddCheckersToDefinition, type DataParsers, type MergeDefinition } from "../types";
import { type DataParserCheckerArrayMax, type DataParserCheckerArrayMin } from "./array";
export type TupleShape = readonly [DataParsers, ...DataParsers[]];
export type DataParserTupleShapeOutput<GenericShape extends TupleShape, GenericRest extends DataParsers | undefined> = IsEqual<GenericShape, TupleShape> extends true ? TupleShape : GenericShape extends [
    infer InferredFirst extends DataParsers,
    ...infer InferredRest extends DataParsers[]
] ? [
    Output<InferredFirst>,
    ...(InferredRest extends TupleShape ? DataParserTupleShapeOutput<InferredRest, GenericRest> : UnionContain<GenericRest, undefined> extends true ? [] : Output<Adaptor<GenericRest, DataParser>>[])
] : never;
export type DataParserTupleShapeInput<GenericShape extends TupleShape, GenericRest extends DataParsers | undefined> = IsEqual<GenericShape, TupleShape> extends true ? TupleShape : GenericShape extends [
    infer InferredFirst extends DataParsers,
    ...infer InferredRest extends DataParsers[]
] ? [
    Input<InferredFirst>,
    ...(InferredRest extends TupleShape ? DataParserTupleShapeOutput<InferredRest, GenericRest> : UnionContain<GenericRest, undefined> extends true ? [] : Input<Adaptor<GenericRest, DataParser>>[])
] : never;
export type DataParserTupleCheckers = (DataParserCheckerArrayMin | DataParserCheckerArrayMax);
export interface DataParserDefinitionTuple extends DataParserDefinition<DataParserTupleCheckers> {
    readonly shape: TupleShape;
    readonly rest?: DataParsers;
}
export declare const dataParserTupleKind: import("../../common").KindHandler<import("../../common").KindDefinition<"data-parser-tuple", unknown>>;
type _DataParserTuple<GenericDefinition extends DataParserDefinitionTuple> = (DataParser<GenericDefinition, DataParserTupleShapeOutput<GenericDefinition["shape"], GenericDefinition["rest"]>, DataParserTupleShapeInput<GenericDefinition["shape"], GenericDefinition["rest"]>> & Kind<typeof dataParserTupleKind.definition>);
export interface DataParserTuple<GenericDefinition extends DataParserDefinitionTuple = DataParserDefinitionTuple> extends _DataParserTuple<GenericDefinition> {
    addChecker<GenericChecker extends [DataParserTupleCheckers, ...DataParserTupleCheckers[]]>(...args: GenericChecker): DataParserTuple<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function tuple<GenericShape extends TupleShape, const GenericDefinition extends Partial<Omit<DataParserDefinitionTuple, "shape">> = never>(shape: GenericShape, definition?: GenericDefinition): DataParserTuple<MergeDefinition<DataParserDefinitionTuple, NeverCoalescing<GenericDefinition, {}> & {
    shape: GenericShape;
}>>;
export {};
