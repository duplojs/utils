import { type AnyValue } from "@scripts/common/types/AnyValue";
import { createEitherNullishEmpty, type EitherNullishEmpty, type NullishValue } from "./empty";
import { createEitherNullishFilled, type EitherNullishFilled } from "./filled";

export function createEitherNullish<
	GenericValue extends AnyValue = undefined,
>(value: GenericValue): GenericValue extends NullishValue
	? EitherNullishEmpty<GenericValue>
	: EitherNullishFilled<GenericValue>;
export function createEitherNullish(value: AnyValue) {
	return value === null || value === undefined
		? createEitherNullishEmpty(value)
		: createEitherNullishFilled(value);
}
