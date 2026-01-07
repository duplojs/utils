import { type AnyTuple } from "../../common";
/**
 * Gets the first element of an array.
 * 
 * **Supported call styles:**
 * - Classic: `first(array)` → returns the first element
 * 
 * Returns `undefined` when the array is empty.
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.first([1, 2, 3]); // 1
 * 
 * A.first(<const>["alpha", "beta"]); // predicate "alpha"
 * 
 * A.first([]); // undefined
 * ```
 * 
 * @remarks
 * - Type-safe with tuple types: return type is inferred as the first element
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/first
 * 
 * @namespace A
 * 
 */
export declare function first<GenericArray extends readonly unknown[]>(array: GenericArray): GenericArray extends AnyTuple ? GenericArray[0] : GenericArray[number] | undefined;
