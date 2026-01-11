/**
 * The toString() function converts a literal (number, string, bigint, boolean, null, undefined) into a typed template string.
 * 
 * Signature: `toString(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = toString(42n);
 * 
 * // type: "42"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/toString
 * 
 * @namespace C
 * 
 */
export declare function toString<GenericValue extends number | string | bigint | boolean | null | undefined>(value: GenericValue): `${GenericValue}`;
