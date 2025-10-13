import { nullishEmpty, type EitherNullishEmpty, type NullishValue } from "./empty";
import { nullishFilled, type EitherNullishFilled } from "./filled";

export function nullish<
	const GenericValue extends unknown = undefined,
>(value: GenericValue): GenericValue extends NullishValue
	? EitherNullishEmpty<GenericValue>
	: EitherNullishFilled<GenericValue>;
export function nullish(value: unknown) {
	return value === null || value === undefined
		? nullishEmpty(value)
		: nullishFilled(value);
}

export type Nullish<
	GenericValue extends unknown,
> = EitherNullishFilled<GenericValue> | EitherNullishEmpty;
