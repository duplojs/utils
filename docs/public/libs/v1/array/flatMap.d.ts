interface ArrayFlatMapParams<GenericInputArray extends readonly unknown[]> {
    index: number;
    self: GenericInputArray;
}
/**
 * Maps each element and flattens the result by one level.
 * 
 * **Supported call styles:**
 * - Classic: `flatMap(array, theFunction)` → returns a new array
 * - Curried: `flatMap(theFunction)` → returns a function waiting for the array
 * 
 * The mapping function receives `(element, { index, self })`.
 * The input array is not mutated.
 * 

 * ```ts
 * A.flatMap(
 * 	[1, 2],
 * 	(value) => [value, value],
 * ); // [1, 1, 2, 2]
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.flatMap((value) => [value.length]),
 * ); // [5, 4]
 * 
 * A.flatMap(
 * 	[1, 2, 3],
 * 	(value, { index }) => [index, value],
 * ); // [0, 1, 1, 2, 2, 3]
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.prototype.flatMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
 * 
 * @see [`A.map`](https://utils.duplojs.dev/en/v1/api/array/map) For mapping without flattening
 * @see https://utils.duplojs.dev/en/v1/api/array/flatMap
 * 
 * @namespace A
 * 
 */
export declare function flatMap<GenericInput extends readonly unknown[], GenericOutput extends unknown>(theFunction: (element: GenericInput[number], params: ArrayFlatMapParams<GenericInput>) => GenericOutput): (input: GenericInput) => FlatArray<GenericOutput, 1>[];
export declare function flatMap<GenericInput extends readonly unknown[], GenericOutput extends unknown>(input: GenericInput, theFunction: (element: GenericInput[number], params: ArrayFlatMapParams<GenericInput>) => GenericOutput): FlatArray<GenericOutput, 1>[];
export {};
