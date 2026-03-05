import type { MapTuple } from "./types";
interface ArrayMapTupleParams<GenericInputTuple extends readonly unknown[]> {
    index: number;
    self: GenericInputTuple;
}
/**
 * Transforms each element of an array while preserving tuple length in types.
 * 
 * **Supported call styles:**
 * - Classic: `mapTuple(input, theFunction)` -> returns a new array
 * - Curried: `mapTuple(theFunction)` -> returns a function waiting for the input
 * 
 * The mapping function receives `(element, { index, self })`, where `index` is the element position and `self` is the original array.
 * The input array is not mutated.
 * 
 * ```ts
 * A.mapTuple(
 * 	<const>[1, 2, 3],
 * 	(value) => value * 2,
 * ); // [2, 4, 6]
 * 
 * pipe(
 * 	<const>["alpha", "beta"],
 * 	A.mapTuple((value, { index }) => `${index}:${value}`),
 * ); // ["0:alpha", "1:beta"]
 * 
 * A.mapTuple(
 * 	[10, 20, 30],
 * 	(value, { self }) => value / self.length,
 * ); // [3.333..., 6.666..., 10]
 * ```
 * 
 * @remarks
 * - For tuple inputs (`as const`), the output keeps the same tuple length.
 * - For non-tuple arrays, the output type is `GenericOutput[]`.
 * 
 * @see [`A.map`](https://utils.duplojs.dev/en/v1/api/array/map) For generic array mapping
 * @see https://utils.duplojs.dev/en/v1/api/array/mapTuple
 * 
 * @namespace A
 * 
 */
export declare function mapTuple<GenericInput extends readonly unknown[], GenericOutput extends unknown>(theFunction: (element: GenericInput[number], params: ArrayMapTupleParams<GenericInput>) => GenericOutput): (input: GenericInput) => MapTuple<GenericInput, GenericOutput>;
export declare function mapTuple<GenericInput extends readonly unknown[], GenericOutput extends unknown>(input: GenericInput, theFunction: (element: GenericInput[number], params: ArrayMapTupleParams<GenericInput>) => GenericOutput): MapTuple<GenericInput, GenericOutput>;
export {};
