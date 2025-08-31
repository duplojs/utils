import { createNullableEmpty, type EitherNullableEmpty } from "./empty";
import { createNullableFilled, type EitherNullableFilled } from "./filled";

export function createNullable<
	const GenericValue extends unknown = null,
>(value?: GenericValue): GenericValue extends null
	? EitherNullableEmpty
	: EitherNullableFilled<GenericValue>;
export function createNullable(value: unknown = null) {
	return value === null
		? createNullableEmpty()
		: createNullableFilled(value);
}
