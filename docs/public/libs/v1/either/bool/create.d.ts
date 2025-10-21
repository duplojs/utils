import { type IsEqual } from "../../common";
import { type BoolFalsyValue, type EitherBoolFalsy } from "./falsy";
import { type EitherBoolTruthy } from "./truthy";
export declare function bool<const GenericValue extends unknown = undefined>(value: GenericValue): GenericValue extends BoolFalsyValue ? EitherBoolFalsy<GenericValue> : IsEqual<GenericValue, number> extends true ? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<0> : IsEqual<GenericValue, string> extends true ? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<""> : EitherBoolTruthy<GenericValue>;
export type Bool<GenericValue extends unknown> = EitherBoolTruthy<GenericValue> | EitherBoolFalsy;
