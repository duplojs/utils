import { type WrappedValue } from "./wrapValue";
export type Unwrap<GenericAnyValue extends unknown> = GenericAnyValue extends WrappedValue<infer inferredValue> ? inferredValue : GenericAnyValue;
/**
 * The unwrap() function extracts the inner value of a WrappedValue. If the input is not wrapped, it is returned as is.
 * 
 * Signature: `unwrap(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const wrapped = wrapValue("value");
 * 
 * // type: WrappedValue<"value">
 * 
 * const value = unwrap(wrapped);
 * 
 * // type: "value"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/unwrap
 * 
 */
export declare function unwrap<const GenericValue extends unknown>(anyValue: GenericValue): Unwrap<GenericValue>;
