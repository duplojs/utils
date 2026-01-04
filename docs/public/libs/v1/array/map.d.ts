interface ArrayMapParams<GenericInputArray extends readonly unknown[]> {
    index: number;
    self: GenericInputArray;
}
/**
 * Transforms each element of an array.
 * 
 * **Supported call styles:**
 * - Classic: `map(array, theFunction)` → returns a new array
 * - Curried: `map(theFunction)` → returns a function waiting for the array
 * 
 * The mapping function receives `(element, { index, self })`, where `index` is the element
 * position and `self` is the original array.
 * The input array is not mutated.
 * 

 * ```ts
 * A.map(
 * 	[1, 2, 3],
 * 	(value) => value * 2,
 * ); // [2, 4, 6]
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.map((value, { index }) => `${index}:${value}`),
 * ); // ["0:alpha", "1:beta"]
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 * 
 * @see [`A.filter`](https://utils.duplojs.dev/en/v1/api/array/filter) For selecting elements
 * @see [`A.reduce`](https://utils.duplojs.dev/en/v1/api/array/reduce) For accumulating values
 * @see https://utils.duplojs.dev/en/v1/api/array/map
 * 
 * @namespace A
 * 
 */
export declare function map<GenericInput extends readonly unknown[], GenericOutput extends unknown>(theFunction: (element: GenericInput[number], params: ArrayMapParams<GenericInput>) => GenericOutput): (input: GenericInput) => GenericOutput[];
export declare function map<GenericInput extends readonly unknown[], GenericOutput extends unknown>(input: GenericInput, theFunction: (element: GenericInput[number], params: ArrayMapParams<GenericInput>) => GenericOutput): GenericOutput[];
export {};
