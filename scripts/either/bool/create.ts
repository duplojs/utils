import { type IsEqual } from "@scripts/common";
import { type BoolFalsyValue, boolFalsy, type EitherBoolFalsy } from "./falsy";
import { boolTruthy, type EitherBoolTruthy } from "./truthy";

export function bool<
	const GenericValue extends unknown = undefined,
>(value: GenericValue): GenericValue extends BoolFalsyValue
	? EitherBoolFalsy<GenericValue>
	: IsEqual<GenericValue, number> extends true
		? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<0>
		: IsEqual<GenericValue, string> extends true
			? EitherBoolTruthy<GenericValue> | EitherBoolFalsy<"">
			: EitherBoolTruthy<GenericValue>;

export function bool(value: unknown) {
	return value === undefined
		|| value === null
		|| value === 0
		|| value === ""
		|| value === false
		? boolFalsy(value)
		: boolTruthy(value);
}
