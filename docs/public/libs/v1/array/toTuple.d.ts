import { type FixDeepFunctionInfer, type AnyFunction } from "../common";
type ShapeTuple<GenericInput extends unknown = unknown> = readonly [
    (input: GenericInput) => unknown,
    ...((input: GenericInput) => unknown)[]
];
type ComputesResult<GenericShapeTuple extends ShapeTuple<any>> = GenericShapeTuple extends readonly [
    infer InferredFirst extends AnyFunction,
    ...infer InferredRest extends ShapeTuple<any> | readonly []
] ? InferredRest extends ShapeTuple<any> ? ComputesResult<InferredRest> extends infer inferredResult extends readonly any[] ? [ReturnType<InferredFirst>, ...inferredResult] : never : [ReturnType<InferredFirst>] : never;
export declare function toTuple<GenericInput extends unknown, GenericShapeTuple extends ShapeTuple<NoInfer<GenericInput>>>(shapeObject: ShapeTuple<NoInfer<GenericInput>> & GenericShapeTuple): (input: GenericInput) => ComputesResult<NoInfer<GenericShapeTuple>>;
export declare function toTuple<GenericInput extends unknown, GenericShapeTuple extends ShapeTuple<GenericInput>>(input: GenericInput, shapeObject: FixDeepFunctionInfer<ShapeTuple<GenericInput>, GenericShapeTuple>): ComputesResult<GenericShapeTuple>;
export {};
