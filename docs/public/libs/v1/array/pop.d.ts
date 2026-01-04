import { type AnyTuple } from "../common";
import { type PopTuple } from "./types";
/**
 * Removes the last element from an array.
 * 
 * Signature: `pop(array)` → returns a new array
 * 
 * The input array is not mutated.
 * 

 * ```ts
 * A.pop(
 * 	[1, 2, 3],
 * ); // [1, 2]
 * 
 * A.pop(
 * 	<const>["alpha", "beta"],
 * ); // ["alpha"]
 * 
 * A.pop(
 * 	[],
 * ); // []
 * 
 * ```
 * 
 * @remarks
 * - Type-safe with tuple types: return type is inferred without the last element
 * 
 * @see [`A.shift`](https://utils.duplojs.dev/en/v1/api/array/shift) For removing the first element
 * @see https://utils.duplojs.dev/en/v1/api/array/pop
 * 
 * @namespace A
 * 
 */
export declare function pop<const GenericArray extends readonly unknown[]>(array: GenericArray): GenericArray extends AnyTuple ? PopTuple<GenericArray> : GenericArray;
