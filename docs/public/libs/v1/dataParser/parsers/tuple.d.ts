import { type UnionContain, type IsEqual, type Kind, type Adaptor, type NeverCoalescing, type FixDeepFunctionInfer, type Or } from "../../common";
import { type DataParserDefinition, type DataParserBase, type Output, type Input, type DataParser, type DataParserChecker } from "../base";
import { type GetEligibleChecker, type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../../dataParser/types";
export type TupleShape = readonly [DataParser, ...DataParser[]];
export type DataParserTupleShapeOutput<GenericShape extends TupleShape, GenericRest extends DataParser | undefined> = IsEqual<GenericShape, TupleShape> extends true ? unknown[] : GenericShape extends readonly [
    infer InferredFirst extends DataParser,
    ...infer InferredRest extends DataParser[]
] ? [
    Output<InferredFirst>,
    ...(Exclude<InferredRest, TupleShape> extends infer InferredShapeRest extends readonly any[] ? IsEqual<InferredShapeRest[number], never> extends true ? [] : Output<InferredShapeRest[number]>[] : []),
    ...(InferredRest extends TupleShape ? DataParserTupleShapeOutput<InferredRest, GenericRest> : Or<[
        UnionContain<GenericRest, undefined>,
        IsEqual<GenericRest, never>
    ]> extends true ? [] : Output<Adaptor<GenericRest, DataParser>>[])
] : never;
export type DataParserTupleShapeInput<GenericShape extends TupleShape, GenericRest extends DataParser | undefined> = IsEqual<GenericShape, TupleShape> extends true ? unknown[] : GenericShape extends readonly [
    infer InferredFirst extends DataParser,
    ...infer InferredRest extends DataParser[]
] ? [
    Input<InferredFirst>,
    ...(Exclude<InferredRest, TupleShape> extends infer InferredShapeRest extends readonly any[] ? IsEqual<InferredShapeRest[number], never> extends true ? [] : Input<InferredShapeRest[number]>[] : []),
    ...(InferredRest extends TupleShape ? DataParserTupleShapeInput<InferredRest, GenericRest> : Or<[
        UnionContain<GenericRest, undefined>,
        IsEqual<GenericRest, never>
    ]> extends true ? [] : Input<Adaptor<GenericRest, DataParser>>[])
] : never;
export type DataParserTupleCheckers<GenericInput extends unknown[] = unknown[]> = GetEligibleChecker<GenericInput>;
export interface DataParserDefinitionTuple<GenericInput extends unknown[] = unknown[]> extends DataParserDefinition<DataParserTupleCheckers<GenericInput>> {
    readonly shape: TupleShape;
    readonly rest: DataParser | undefined;
}
export declare const tupleKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/tuple", unknown>>;
type _DataParserTuple<GenericDefinition extends DataParserDefinitionTuple> = (DataParserBase<GenericDefinition, DataParserTupleShapeOutput<GenericDefinition["shape"], GenericDefinition["rest"]>, DataParserTupleShapeInput<GenericDefinition["shape"], GenericDefinition["rest"]>> & Kind<typeof tupleKind.definition>);
export interface DataParserTuple<GenericDefinition extends DataParserDefinitionTuple = DataParserDefinitionTuple> extends _DataParserTuple<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>): DataParserTuple<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
/**
 * Creates a data parser for tuples with a fixed shape.
 * 
 * **Supported call styles:**
 * - Classic: `DP.tuple(shape, definition?)` -> returns a tuple parser
 * - Curried: not available
 * 
 * Validates array inputs against the provided tuple shape, with an optional rest parser.
 * 
 * ```ts
 * const parser = DP.tuple([DP.string(), DP.number()]);
 * const result = parser.parse(["id", 42]);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: [string, number]
 * }
 * 
 * const withRest = DP.tuple([DP.string()], { rest: DP.number() });
 * const restResult = withRest.parse(["a", 1, 2, 3]);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/tuple
 * 
 * @namespace DP
 * 
 */
export declare function tuple<const GenericShape extends TupleShape, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionTuple<DataParserTupleShapeOutput<GenericShape, GenericDefinition["rest"]>>, "shape"> = never>(shape: GenericShape, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionTuple<DataParserTupleShapeOutput<GenericShape, GenericDefinition["rest"]>>, "shape">, GenericDefinition>): DataParserTuple<MergeDefinition<DataParserDefinitionTuple, NeverCoalescing<GenericDefinition, {}> & {
    readonly shape: GenericShape;
    readonly rest: Or<[
        IsEqual<GenericDefinition["rest"], unknown>,
        IsEqual<GenericDefinition, never>
    ]> extends true ? undefined : GenericDefinition["rest"];
}>>;
export declare namespace tuple {
    var overrideHandler: import("../../common").OverrideHandler<DataParserTuple<DataParserDefinitionTuple<unknown[]>>>;
}
export {};
