import { type Number, type String } from "../../base";
/**
 * Returns the length of a String as a wrapped Number.
 * 
 * **Supported call styles:**
 * - Classic: `length(primitive)` -> returns a Number
 * 
 * Use it to keep string-length calculations in the Clean domain.
 * 
 * ```ts
 * const name = C.String.createOrThrow("Duplo");
 * 
 * const size = C.length(name);
 * // size: C.Number
 * 
 * const fromRaw = C.length(C.String.createOrThrow("Utils"));
 * // fromRaw: C.Number
 * 
 * const empty = C.length(C.String.createOrThrow(""));
 * // empty: C.Number
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/length
 * 
 * @namespace C
 * 
 */
export declare function length(primitive: String): Number;
