import { type NullableEmpty } from "./empty";
import { type NullableFilled } from "./filled";
/**
 * Wraps a null or non-null value in an Either, while keeping the information on whether it is filled or empty.
 * 
 * Signature: `nullable(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.nullable(true ? "value" : null);
 * 
 * // type: E.NullableEmpty | E.NullableFilled<"value">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/nullable
 * 
 * @namespace E
 * 
 */
export declare function nullable<const GenericValue extends unknown = null>(value: GenericValue): GenericValue extends null ? NullableEmpty : NullableFilled<GenericValue>;
export type Nullable<GenericValue extends unknown> = NullableFilled<GenericValue> | NullableEmpty;
