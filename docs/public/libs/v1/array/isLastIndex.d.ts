/**
 * Checks if an index is the last index of an array.
 * 
 * **Supported call styles:**
 * - Classic: `isLastIndex(array, index)` → returns a boolean
 * - Curried: `isLastIndex(index)` → returns a function waiting for the array
 * 
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.map(
 * 	["alpha", "beta", "omega"],
 * 	(element, { index, self }) => whenElse(
 * 		self,
 * 		A.isLastIndex(index),
 * 		() => `${element}:last`,
 * 		() => element,
 * 	),
 * ); // ["alpha", "beta", "omega:last"]
 * ```
 * 
 * @see [`A.at`](https://utils.duplojs.dev/en/v1/api/array/at) For accessing by index
 * @see [`A.length`](https://utils.duplojs.dev/en/v1/api/array/length) For getting length
 * @see https://utils.duplojs.dev/en/v1/api/array/isLastIndex
 * 
 * @namespace A
 * 
 */
export declare function isLastIndex<GenericInput extends readonly unknown[]>(index: number): (input: GenericInput) => boolean;
export declare function isLastIndex<GenericInput extends readonly unknown[]>(input: GenericInput, index: number): boolean;
