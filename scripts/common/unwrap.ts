import { type WrappedValue } from "./wrapValue";
import { type AnyValue } from "./types/anyValue";

export type Unwrap<
	GenericAnyValue extends unknown,
> = GenericAnyValue extends WrappedValue
	? GenericAnyValue["value"]
	: GenericAnyValue;

export function unwrap<
	GenericValue extends AnyValue,
	GenericAnyValue extends AnyValue | WrappedValue<GenericValue>,
>(
	anyValue: GenericAnyValue,
): Unwrap<GenericAnyValue>;
export function unwrap<
	GenericAnyValue extends unknown,
>(
	anyValue: GenericAnyValue,
): Unwrap<GenericAnyValue>;
export function unwrap(anyValue: unknown) {
	return anyValue && typeof anyValue === "object" && "value" in anyValue
		? anyValue.value as never
		: anyValue as never;
}
