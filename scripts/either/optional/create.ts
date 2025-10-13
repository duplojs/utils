import { optionalEmpty, type EitherOptionalEmpty } from "./empty";
import { optionalFilled, type EitherOptionalFilled } from "./filled";

export function optional<
	const GenericValue extends unknown = undefined,
>(value: GenericValue): GenericValue extends undefined
	? EitherOptionalEmpty
	: EitherOptionalFilled<GenericValue>;
export function optional(value: unknown) {
	return value === undefined
		? optionalEmpty()
		: optionalFilled(value);
}

export type Optional<
	GenericValue extends unknown,
> = EitherOptionalFilled<GenericValue> | EitherOptionalEmpty;
