import { type AnyTuple } from "../common/types/anyTuple";
import { type JoinTuple } from "./types";
/**
 * Joins array elements into a string.
 * 
 * **Supported call styles:**
 * - Classic: `join(array, separator)` → returns a string
 * - Curried: `join(separator)` → returns a function waiting for the array
 * 
 * The input array is not mutated.
 * 
 * 
 * ```ts
 * A.join(
 * 	["alpha", "beta"],
 * 	"-",
 * ); // "alpha-beta"
 * 
 * pipe(
 * 	["a", "b", "c"],
 * 	A.join(""),
 * ); // "abc"
 * 
 * A.join(
 * 	<const>["x", "y"],
 * 	":",
 * ); // "x:y"
 * ```
 * 
 * @remarks
 * - Tuple inputs preserve their literal joined type
 * - Uses the same semantics as [`Array.prototype.join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/join
 * 
 * @namespace A
 * 
 */
export declare function join<GenericArray extends readonly string[], GenericSeparator extends string>(separator: GenericSeparator): (array: GenericArray) => GenericArray extends AnyTuple ? JoinTuple<GenericArray, GenericSeparator> : string;
export declare function join<GenericArray extends readonly string[], GenericSeparator extends string>(array: GenericArray, separator: GenericSeparator): GenericArray extends AnyTuple ? JoinTuple<GenericArray, GenericSeparator> : string;
