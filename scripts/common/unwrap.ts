import { type TheValue } from "./theValue";
import { type AnyValue } from "./types/AnyValue";

export function unwrap<
	GenericValue extends AnyValue,
>(
	{ value }: TheValue<GenericValue>,
) {
	return value;
}
