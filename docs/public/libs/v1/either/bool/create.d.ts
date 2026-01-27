import { type FalsyValue, type IsEqual } from "../../common";
import { type BoolFalsy } from "./falsy";
import { type BoolTruthy } from "./truthy";
/**
 * Converts any value into a boolean monad (BoolTruthy or BoolFalsy). Handy to keep track of the test while benefiting from the whenIsBoolTruthy/whenIsBoolFalsy helpers.
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
 * // type: E.BoolFalsy<undefined> | E.BoolTruthy<"nest">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/bool
 * 
 * @namespace E
 * 
 */
export declare function bool<const GenericValue extends unknown = undefined>(value: GenericValue): GenericValue extends FalsyValue ? BoolFalsy<GenericValue> : IsEqual<GenericValue, number> extends true ? BoolTruthy<GenericValue> | BoolFalsy<0> : IsEqual<GenericValue, bigint> extends true ? BoolTruthy<GenericValue> | BoolFalsy<0n> : IsEqual<GenericValue, string> extends true ? BoolTruthy<GenericValue> | BoolFalsy<""> : BoolTruthy<GenericValue>;
export type Bool<GenericValue extends unknown> = BoolTruthy<GenericValue> | BoolFalsy;
