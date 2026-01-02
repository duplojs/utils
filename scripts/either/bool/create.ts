import { type FalsyValue, type IsEqual } from "@scripts/common";
import { boolFalsy, type EitherBoolFalsy } from "./falsy";
import { boolTruthy, type EitherBoolTruthy } from "./truthy";

export function bool<
	const GenericValue extends unknown = undefined,
>(value: GenericValue): GenericValue extends FalsyValue
	? EitherBoolFalsy<GenericValue>
	: IsEqual<GenericValue, number> extends true
		? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<0>
		: IsEqual<GenericValue, bigint> extends true
			? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<0n>
			: IsEqual<GenericValue, string> extends true
				? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<"">
				: EitherBoolTruthy<GenericValue>;

export function bool(value: unknown) {
	return value === undefined
		|| value === null
		|| value === 0
		|| value === 0n
		|| value === ""
		|| value === false
		? boolFalsy(value)
		: boolTruthy(value);
}

export type Bool<
	GenericValue extends unknown,
> = EitherBoolTruthy<GenericValue> | EitherBoolFalsy;
