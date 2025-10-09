import { nullableEmpty, type EitherNullableEmpty } from "./empty";
import { nullableFilled, type EitherNullableFilled } from "./filled";

export function nullable<
	const GenericValue extends unknown = null,
>(value: GenericValue): GenericValue extends null
	? EitherNullableEmpty
	: EitherNullableFilled<GenericValue>;
export function nullable(value: unknown) {
	return value === null
		? nullableEmpty()
		: nullableFilled(value);
}
