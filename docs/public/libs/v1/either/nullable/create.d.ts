import { type EitherNullableEmpty } from "./empty";
import { type EitherNullableFilled } from "./filled";
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
 * // type: E.EitherNullableEmpty | E.EitherNullableFilled<"value">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/nullable
 * 
 * @namespace E
 * 
 */
export declare function nullable<const GenericValue extends unknown = null>(value: GenericValue): GenericValue extends null ? EitherNullableEmpty : EitherNullableFilled<GenericValue>;
export type Nullable<GenericValue extends unknown> = EitherNullableFilled<GenericValue> | EitherNullableEmpty;
