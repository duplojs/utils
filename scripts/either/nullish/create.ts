import { nullishEmpty, type NullishEmpty, type NullishValue } from "./empty";
import { nullishFilled, type NullishFilled } from "./filled";

/**
 * {@include either/nullish/index.md}
 */
export function nullish<
	const GenericValue extends unknown = undefined,
>(value: GenericValue): GenericValue extends NullishValue
	? NullishEmpty<GenericValue>
	: NullishFilled<GenericValue>;
export function nullish(value: unknown) {
	return value === null || value === undefined
		? nullishEmpty(value)
		: nullishFilled(value);
}

export type Nullish<
	GenericValue extends unknown,
> = NullishFilled<GenericValue> | NullishEmpty;
