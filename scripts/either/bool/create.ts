import { type BoolFalsyValue, createBoolFalsy, type EitherBoolFalsy } from "./falsy";
import { createBoolTruthy, type EitherBoolTruthy } from "./truthy";

export function createBool<
	const GenericValue extends unknown = undefined,
>(value?: GenericValue): GenericValue extends BoolFalsyValue
	? EitherBoolFalsy<GenericValue>
	: EitherBoolTruthy<GenericValue>;
export function createBool(value: unknown) {
	return value === undefined
		|| value === null
		|| value === 0
		|| value === ""
		|| value === false
		? createBoolFalsy(value)
		: createBoolTruthy(value);
}
