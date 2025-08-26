import { isWrappedValue, wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { type MaybeWrapped } from "./types/maybeWrapped";
import { type AnyValue } from "./types";

export function toWrappedValue<
	GenericValue extends MaybeWrapped<AnyValue>,
>(
	value: GenericValue,
): GenericValue extends WrappedValue
		? GenericValue
		: WrappedValue<GenericValue> {
	return isWrappedValue(value)
		? value as never
		: wrapValue(value) as never;
}
