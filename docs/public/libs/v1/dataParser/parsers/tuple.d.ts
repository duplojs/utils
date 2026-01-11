import { type UnionContain, type IsEqual, type Kind, type Adaptor, type NeverCoalescing, type FixDeepFunctionInfer, type AnyTuple } from "../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
import { type DataParserCheckerArrayMax, type DataParserCheckerArrayMin } from "./array";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
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
export interface DataParserTupleCheckerCustom<GenericInput extends AnyTuple<unknown> = AnyTuple<unknown>> {
}
export type DataParserTupleCheckers<GenericInput extends AnyTuple<unknown> = AnyTuple<unknown>> = (DataParserTupleCheckerCustom<GenericInput>[GetPropsWithValueExtends<DataParserTupleCheckerCustom<GenericInput>, DataParserChecker>] | DataParserCheckerArrayMin | DataParserCheckerArrayMax | CheckerRefineImplementation<GenericInput>);
export interface DataParserDefinitionTuple extends DataParserDefinition<DataParserTupleCheckers> {
    readonly shape: TupleShape;
    readonly rest?: DataParser;
}
export declare const tupleKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/tuple", unknown>>;
type _DataParserTuple<GenericDefinition extends DataParserDefinitionTuple> = (DataParser<GenericDefinition, DataParserTupleShapeOutput<GenericDefinition["shape"], GenericDefinition["rest"]>, DataParserTupleShapeInput<GenericDefinition["shape"], GenericDefinition["rest"]>> & Kind<typeof tupleKind.definition>);
export interface DataParserTuple<GenericDefinition extends DataParserDefinitionTuple = DataParserDefinitionTuple> extends _DataParserTuple<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserTupleCheckers<Output<this>>,
        ...DataParserTupleCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserTupleCheckers<Output<this>>,
        ...DataParserTupleCheckers<Output<this>>[]
    ], GenericChecker>): DataParserTuple<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionTuple>(definition: GenericDefinition): DataParserTuple<MergeDefinition<DataParserDefinitionTuple, GenericDefinition>>;
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
export declare function tuple<GenericShape extends TupleShape, const GenericDefinition extends Partial<Omit<DataParserDefinitionTuple, "shape">> = never>(shape: GenericShape, definition?: GenericDefinition): DataParserTuple<MergeDefinition<DataParserDefinitionTuple, NeverCoalescing<GenericDefinition, {}> & {
    shape: GenericShape;
}>>;
export declare namespace tuple {
    var overrideHandler: import("../../common").OverrideHandler<DataParserTuple<DataParserDefinitionTuple>>;
}
export {};
