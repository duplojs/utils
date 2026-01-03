import { type FixDeepFunctionInfer, type AnyFunction } from "../common";
type ShapeTuple<GenericInput extends unknown = unknown> = readonly [
    (input: GenericInput) => unknown,
    ...((input: GenericInput) => unknown)[]
];
type ComputesResult<GenericShapeTuple extends ShapeTuple<any>> = GenericShapeTuple extends readonly [
    infer InferredFirst extends AnyFunction,
    ...infer InferredRest extends ShapeTuple<any> | readonly []
] ? InferredRest extends ShapeTuple<any> ? ComputesResult<InferredRest> extends infer inferredResult extends readonly any[] ? [ReturnType<InferredFirst>, ...inferredResult] : never : [ReturnType<InferredFirst>] : never;
/**
 * Transforms a value into a tuple using a shape of functions.
 * 
 * **Supported call styles:**
 * - Classic: `toTuple(input, shape)` → returns a tuple of results
 * - Curried: `toTuple(shape)` → returns a function waiting for the input
 * 
 * Each function in the shape receives the same input.
 * The input value is not mutated.
 * 

 * ```ts
 * A.toTuple(
 * 	2,
 * 	[
 * 		(value) => value + 1,
 * 		(value) => value * 2,
 * 	],
 * ); // [3, 4]
 * 
 * pipe(
 * 	"alpha",
 * 	A.toTuple(
 * 		[(value) => value.length],
 * 	),
 * ); // [5]
 * ```
 * 
 * @see [`A.map`](https://utils.duplojs.dev/en/v1/api/array/map) For mapping arrays
 * @see https://utils.duplojs.dev/en/v1/api/array/toTuple
 * 
 * @namespace A
 * 
 */
export declare function toTuple<GenericInput extends unknown, GenericShapeTuple extends ShapeTuple<NoInfer<GenericInput>>>(shapeObject: ShapeTuple<NoInfer<GenericInput>> & GenericShapeTuple): (input: GenericInput) => ComputesResult<NoInfer<GenericShapeTuple>>;
export declare function toTuple<GenericInput extends unknown, GenericShapeTuple extends ShapeTuple<GenericInput>>(input: GenericInput, shapeObject: FixDeepFunctionInfer<ShapeTuple<GenericInput>, GenericShapeTuple>): ComputesResult<GenericShapeTuple>;
export {};
