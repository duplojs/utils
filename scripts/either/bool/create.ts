import { type AnyValue } from "@scripts/common/types/anyValue";
import { type BoolFalsyValue, createEitherBoolFalsy, type EitherBoolFalsy } from "./falsy";
import { createEitherBoolTruthy, type EitherBoolTruthy } from "./truthy";

export function createEitherBool<
	GenericValue extends AnyValue = undefined,
>(value?: GenericValue): GenericValue extends BoolFalsyValue
	? EitherBoolFalsy<GenericValue>
	: EitherBoolTruthy<GenericValue>;
export function createEitherBool(value: AnyValue) {
	return value === undefined
		|| value === null
		|| value === 0
		|| value === ""
		|| value === false
		? createEitherBoolFalsy(value)
		: createEitherBoolTruthy(value);
}
