import { isWrappedValue, wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { type MaybeWrapped } from "./types/maybeWrapped";
import { type AnyValue } from "./types";

export function toWrappedValue<
	GenericInnerValue extends AnyValue,
	GenericValue extends MaybeWrapped<GenericInnerValue>,
>(
	value: GenericValue,
): GenericValue extends WrappedValue
		? GenericValue
		: WrappedValue<GenericValue> {
	return isWrappedValue(value)
		? value as never
		: wrapValue(value) as never;
}
