import { createOptionalEmpty, type EitherOptionalEmpty } from "./empty";
import { createOptionalFilled, type EitherOptionalFilled } from "./filled";

export function createOptional<
	const GenericValue extends unknown = undefined,
>(value?: GenericValue): GenericValue extends undefined
	? EitherOptionalEmpty
	: EitherOptionalFilled<GenericValue>;
export function createOptional(value: unknown) {
	return value === undefined
		? createOptionalEmpty()
		: createOptionalFilled(value);
}
