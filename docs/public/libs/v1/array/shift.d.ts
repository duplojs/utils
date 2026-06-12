import { type AnyTuple } from "../common";
import { type ShiftTuple } from "../array/types/shiftTuple";
import { type MaxElements, type RemoveKind } from "./types";
/**
 * Removes the first element from an array.
 * 
 * Signature: `shift(array)` → returns a new array
 * 
 * The input array is not mutated.
 * 
 * ```ts
 * A.shift(
 * 	[1, 2, 3],
 * ); // [2, 3]
 * 
 * A.shift(
 * 	<const>["alpha", "beta"],
 * ); // ["beta"]
 * 
 * A.shift(
 * 	[],
 * ); // []
 * 
 * ```
 * 
 * @remarks
 * - Type-safe with tuple types: return type is inferred without the first element
 * 
 * @see [`A.pop`](https://utils.duplojs.dev/en/v1/api/array/pop) For removing the last element
 * @see https://utils.duplojs.dev/en/v1/api/array/shift
 * 
 * @namespace A
 * 
 */
export declare function shift<const GenericArray extends readonly unknown[]>(array: GenericArray): GenericArray extends AnyTuple ? (ShiftTuple<RemoveKind<GenericArray>> & (GenericArray extends MaxElements<infer InferredMax> ? MaxElements<InferredMax> : unknown)) : GenericArray;
