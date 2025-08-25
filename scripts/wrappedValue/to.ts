import { hasValue, theValue, type TheValue } from "@scripts/common/theValue";
import { type WrappedAnyValue } from "./types/anyValue";
import { type MaybeWrapped } from "./types/maybe";

export function toWrappedValue<
	GenericValue extends MaybeWrapped<WrappedAnyValue["value"]>,
>(
	value: GenericValue,
): GenericValue extends TheValue
		? GenericValue
		: TheValue<GenericValue> {
	return hasValue(value)
		? value as never
		: theValue(value) as never;
}
