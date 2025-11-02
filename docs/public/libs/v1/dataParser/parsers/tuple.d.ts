import { type UnionContain, type IsEqual, type Kind, type Adaptor, type NeverCoalescing } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
import { type DataParserCheckerArrayMax, type DataParserCheckerArrayMin } from "./array";
export type TupleShape = readonly [DataParser, ...DataParser[]];
export type DataParserTupleShapeOutput<GenericShape extends TupleShape, GenericRest extends DataParser | undefined> = IsEqual<GenericShape, TupleShape> extends true ? TupleShape : GenericShape extends [
    infer InferredFirst extends DataParser,
    ...infer InferredRest extends DataParser[]
] ? [
    Output<InferredFirst>,
    ...(InferredRest extends TupleShape ? DataParserTupleShapeOutput<InferredRest, GenericRest> : UnionContain<GenericRest, undefined> extends true ? [] : Output<Adaptor<GenericRest, DataParser>>[])
] : never;
export type DataParserTupleShapeInput<GenericShape extends TupleShape, GenericRest extends DataParser | undefined> = IsEqual<GenericShape, TupleShape> extends true ? TupleShape : GenericShape extends [
    infer InferredFirst extends DataParser,
    ...infer InferredRest extends DataParser[]
] ? [
    Input<InferredFirst>,
    ...(InferredRest extends TupleShape ? DataParserTupleShapeOutput<InferredRest, GenericRest> : UnionContain<GenericRest, undefined> extends true ? [] : Input<Adaptor<GenericRest, DataParser>>[])
] : never;
export type DataParserTupleCheckers = (DataParserCheckerArrayMin | DataParserCheckerArrayMax);
export interface DataParserDefinitionTuple extends DataParserDefinition<DataParserTupleCheckers> {
    readonly shape: TupleShape;
    readonly rest?: DataParser;
}
export declare const tupleKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/tuple", unknown>>;
type _DataParserTuple<GenericDefinition extends DataParserDefinitionTuple> = (DataParser<GenericDefinition, DataParserTupleShapeOutput<GenericDefinition["shape"], GenericDefinition["rest"]>, DataParserTupleShapeInput<GenericDefinition["shape"], GenericDefinition["rest"]>> & Kind<typeof tupleKind.definition>);
export interface DataParserTuple<GenericDefinition extends DataParserDefinitionTuple = DataParserDefinitionTuple> extends _DataParserTuple<GenericDefinition> {
    addChecker<GenericChecker extends [DataParserTupleCheckers, ...DataParserTupleCheckers[]]>(...args: GenericChecker): DataParserTuple<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function tuple<GenericShape extends TupleShape, const GenericDefinition extends Partial<Omit<DataParserDefinitionTuple, "shape">> = never>(shape: GenericShape, definition?: GenericDefinition): DataParserTuple<MergeDefinition<DataParserDefinitionTuple, NeverCoalescing<GenericDefinition, {}> & {
    shape: GenericShape;
}>>;
export {};
