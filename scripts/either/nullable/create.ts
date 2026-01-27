import { nullableEmpty, type NullableEmpty } from "./empty";
import { nullableFilled, type NullableFilled } from "./filled";

/**
 * {@include either/nullable/index.md}
 */
export function nullable<
	const GenericValue extends unknown = null,
>(value: GenericValue): GenericValue extends null
	? NullableEmpty
	: NullableFilled<GenericValue>;
export function nullable(value: unknown) {
	return value === null
		? nullableEmpty()
		: nullableFilled(value);
}

export type Nullable<
	GenericValue extends unknown,
> = NullableFilled<GenericValue> | NullableEmpty;
