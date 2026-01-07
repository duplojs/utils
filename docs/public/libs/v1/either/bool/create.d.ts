import { type FalsyValue, type IsEqual } from "../../common";
import { type EitherBoolFalsy } from "./falsy";
import { type EitherBoolTruthy } from "./truthy";
/**
 * Converts any value into a boolean monad (EitherBoolTruthy or EitherBoolFalsy). Handy to keep track of the test while benefiting from the whenIsBoolTruthy/whenIsBoolFalsy helpers.
 * 
 * Signature: `bool(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = pipe(
 * 	["duplo"],
 * 	A.find(equal("nest")),
 * 	E.bool,
 * );
 * 
 * // type: E.EitherBoolFalsy<undefined> | E.EitherBoolTruthy<"nest">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/bool
 * 
 * @namespace E
 * 
 */
export declare function bool<const GenericValue extends unknown = undefined>(value: GenericValue): GenericValue extends FalsyValue ? EitherBoolFalsy<GenericValue> : IsEqual<GenericValue, number> extends true ? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<0> : IsEqual<GenericValue, bigint> extends true ? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<0n> : IsEqual<GenericValue, string> extends true ? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<""> : EitherBoolTruthy<GenericValue>;
export type Bool<GenericValue extends unknown> = EitherBoolTruthy<GenericValue> | EitherBoolFalsy;
