import { type EitherNullishEmpty, type NullishValue } from "./empty";
import { type EitherNullishFilled } from "./filled";
/**
 * Transforms a potentially null/undefined value into an Either. Allows propagating presence/absence in a type-safe way.
 * 
 * Signature: `nullish(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const mayBeInput = true ? true : undefined;
 * 
 * const result = E.nullish(mayBeInput);
 * 
 * // type: E.EitherNullishEmpty<undefined> | E.EitherNullishFilled<true>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/nullish
 * 
 * @namespace E
 * 
 */
export declare function nullish<const GenericValue extends unknown = undefined>(value: GenericValue): GenericValue extends NullishValue ? EitherNullishEmpty<GenericValue> : EitherNullishFilled<GenericValue>;
export type Nullish<GenericValue extends unknown> = EitherNullishFilled<GenericValue> | EitherNullishEmpty;
