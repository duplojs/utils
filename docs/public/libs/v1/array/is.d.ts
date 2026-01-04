/**
 * Checks whether a value is an array.
 * 
 * Signature: `is(value)` → returns a boolean
 * 
 * This is a type guard.
 * 
 * ```ts
 * A.is([1, 2]); // true
 * 
 * A.is("alpha"); // false
 * 
 * const value: unknown = ["beta"];
 * if (A.is(value)) {
 * 	// value is unknown[]
 * }
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Array.isArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/is
 * 
 * @namespace A
 * 
 */
export declare function is<GenericValue extends unknown>(arg: GenericValue): arg is GenericValue extends any[] ? GenericValue : never;
