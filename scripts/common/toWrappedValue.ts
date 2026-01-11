import { isWrappedValue, wrapValue, type WrappedValue } from "@scripts/common/wrapValue";
import { type MaybeWrapped } from "./types/maybeWrapped";
import { type AnyValue } from "./types";

export type ToWrappedValue<
	GenericValue extends unknown,
> = GenericValue extends WrappedValue
	? GenericValue
	: WrappedValue<GenericValue>;

/**
 * {@include common/toWrappedValue/index.md}
 */
export function toWrappedValue<
	GenericInnerValue extends AnyValue,
	GenericValue extends MaybeWrapped<GenericInnerValue>,
>(
	value: GenericValue,
): ToWrappedValue<GenericValue> {
	return isWrappedValue(value)
		? value as never
		: wrapValue(value) as never;
}
