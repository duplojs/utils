import { optionalEmpty, type OptionalEmpty } from "./empty";
import { optionalFilled, type OptionalFilled } from "./filled";

/**
 * {@include either/optional/index.md}
 */
export function optional<
	const GenericValue extends unknown = undefined,
>(value: GenericValue): GenericValue extends undefined
	? OptionalEmpty
	: OptionalFilled<GenericValue>;
export function optional(value: unknown) {
	return value === undefined
		? optionalEmpty()
		: optionalFilled(value);
}

export type Optional<
	GenericValue extends unknown,
> = OptionalFilled<GenericValue> | OptionalEmpty;
