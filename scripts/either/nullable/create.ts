import { type AnyValue } from "@scripts/common/types/anyValue";
import { createEitherNullableEmpty, type EitherNullableEmpty } from "./empty";
import { createEitherNullableFilled, type EitherNullableFilled } from "./filled";

export function createEitherNullable<
	GenericValue extends AnyValue = null,
>(value?: GenericValue): GenericValue extends null
	? EitherNullableEmpty
	: EitherNullableFilled<GenericValue>;
export function createEitherNullable(value: AnyValue = null) {
	return value === null
		? createEitherNullableEmpty()
		: createEitherNullableFilled(value);
}
