import { type Adaptor, type FixDeepFunctionInfer, type IsEqual, type MaybePromise, type NeverCoalescing, type Or, type UnionContain } from "../../common";
import { type DataParser, type DataParserDefinition } from "../base";
import { type DataParserError, SymbolDataParserError } from "../../dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type ApplyRefinementOfDefinition, type AddCheckersToDefinition, type GetEligibleChecker, type Input, type MergeDefinition, type Output, type PrepareDataParserDefinition } from "../types";
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
declare const DataParserTuple_base: import("..").DataParserBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/tuple", unknown>>>;
export declare class DataParserTuple<GenericDefinition extends DataParserDefinitionTuple = DataParserDefinitionTuple> extends DataParserTuple_base<GenericDefinition, ApplyRefinementOfDefinition<DataParserTupleShapeOutput<GenericDefinition["shape"], GenericDefinition["rest"]>, GenericDefinition>, ApplyRefinementOfDefinition<DataParserTupleShapeInput<GenericDefinition["shape"], GenericDefinition["rest"]>, GenericDefinition>> {
    get classConstructor(): typeof DataParserTuple & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserTuple<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    static execParse(self: DataParserTuple, data: unknown, error: DataParserError): MaybePromise<unknown[] | SymbolDataParserError>;
    static dataParserIsAsynchronous(self: DataParserTuple): boolean;
    static prepareDefinition(shape: TupleShape, definition?: Partial<Omit<DataParserDefinitionTuple, "shape">>): DataParserDefinitionTuple;
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
    static create<const GenericShape extends TupleShape, const GenericDefinition extends PrepareDataParserDefinition<DataParserDefinitionTuple<DataParserTupleShapeOutput<GenericShape, GenericDefinition["rest"]>>, "shape"> = never>(shape: GenericShape, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<DataParserDefinitionTuple<DataParserTupleShapeOutput<GenericShape, GenericDefinition["rest"]>>, "shape">, GenericDefinition>): DataParserTuple<MergeDefinition<DataParserDefinitionTuple, NeverCoalescing<GenericDefinition, {}> & {
        readonly shape: GenericShape;
        readonly rest: Or<[
            IsEqual<GenericDefinition["rest"], unknown>,
            IsEqual<GenericDefinition, never>
        ]> extends true ? undefined : GenericDefinition["rest"];
    }>>;
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
export declare const tuple: typeof DataParserTuple.create;
export {};
