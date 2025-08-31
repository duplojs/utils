import { createNullishEmpty, type EitherNullishEmpty, type NullishValue } from "./empty";
import { createNullishFilled, type EitherNullishFilled } from "./filled";

export function createNullish<
	const GenericValue extends unknown = undefined,
>(value?: GenericValue): GenericValue extends NullishValue
	? EitherNullishEmpty<GenericValue>
	: EitherNullishFilled<GenericValue>;
export function createNullish(value?: unknown) {
	return value === null || value === undefined
		? createNullishEmpty(value)
		: createNullishFilled(value);
}
