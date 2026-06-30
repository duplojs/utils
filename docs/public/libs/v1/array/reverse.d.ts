import { type AnyTuple } from "../common/types/anyTuple";
import { type MaxElements, type RemoveKind, type ReverseTuple, type TupleHasSpread } from "../array";
/**
 * Reverses the order of an array.
 * 
 * Signature: `reverse(array)` → returns a new array
 * 
 * The input array is not mutated.
 * 
 * ```ts
 * A.reverse(
 * 	[1, 2, 3],
 * ); // [3, 2, 1]
 * 
 * A.reverse(
 * 	<const>["alpha", "beta"],
 * ); // ["beta", "alpha"]
 * 
 * A.reverse(
 * 	[],
 * ); // []
 * 
 * ```
 * 
 * @remarks
 * - Type-safe with tuple types: return type is inferred as the reversed tuple
 * - Uses the same semantics as [`Array.prototype.reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/reverse
 * 
 * @namespace A
 * 
 */
export declare function reverse<GenericArray extends readonly unknown[]>(array: GenericArray): GenericArray extends AnyTuple ? TupleHasSpread<RemoveKind<GenericArray>> extends true ? GenericArray[number][] : (ReverseTuple<RemoveKind<GenericArray>> & (GenericArray extends MaxElements<infer InferredMax> ? MaxElements<InferredMax> : unknown)) : GenericArray;
