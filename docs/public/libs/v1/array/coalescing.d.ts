import { type AnyValue } from "../common";
import { type ArrayCoalescing } from "./types";
/**
 * Ensures a value is returned as an array.
 * 
 * Signature: `coalescing(value)` → returns an array
 * 
 * If the value is already an array, it is returned as-is.
 * The input value is not mutated.
 * 
 * ```ts
 * A.coalescing(1); // [1]
 * 
 * A.coalescing(["alpha", "beta"]); // ["alpha", "beta"]
 * 
 * A.coalescing(null); // [null]
 * ```
 * 
 * @see [`A.toTuple`](https://utils.duplojs.dev/en/v1/api/array/toTuple) For shaping outputs
 * @see https://utils.duplojs.dev/en/v1/api/array/coalescing
 * 
 * @namespace A
 * 
 */
export declare function coalescing<GenericValue extends AnyValue>(value: GenericValue): ArrayCoalescing<GenericValue>;
