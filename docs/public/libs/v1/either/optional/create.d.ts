import { type EitherOptionalEmpty } from "./empty";
import { type EitherOptionalFilled } from "./filled";
/**
 * Wraps an undefined/defined value in an Either, useful for propagating optional fields.
 * 
 * Signature: `optional(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.optional(true ? "value" : undefined);
 * 
 * // type: E.EitherOptionalEmpty | E.EitherOptionalFilled<"value">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/optional
 * 
 * @namespace E
 * 
 */
export declare function optional<const GenericValue extends unknown = undefined>(value: GenericValue): GenericValue extends undefined ? EitherOptionalEmpty : EitherOptionalFilled<GenericValue>;
export type Optional<GenericValue extends unknown> = EitherOptionalFilled<GenericValue> | EitherOptionalEmpty;
