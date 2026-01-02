import { type FalsyValue, type IsEqual } from "../../common";
import { type EitherBoolFalsy } from "./falsy";
import { type EitherBoolTruthy } from "./truthy";
export declare function bool<const GenericValue extends unknown = undefined>(value: GenericValue): GenericValue extends FalsyValue ? EitherBoolFalsy<GenericValue> : IsEqual<GenericValue, number> extends true ? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<0> : IsEqual<GenericValue, bigint> extends true ? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<0n> : IsEqual<GenericValue, string> extends true ? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<""> : EitherBoolTruthy<GenericValue>;
export type Bool<GenericValue extends unknown> = EitherBoolTruthy<GenericValue> | EitherBoolFalsy;
