import { keyWrappedValue, type WrappedValue } from "./wrapValue";
import { type AnyValue } from "./types/anyValue";

export type Unwrap<
	GenericAnyValue extends unknown,
> = GenericAnyValue extends WrappedValue<infer inferredValue>
	? inferredValue
	: GenericAnyValue;

export function unwrap<
	GenericValue extends AnyValue,
	GenericAnyValue extends AnyValue | WrappedValue<GenericValue>,
>(
	anyValue: GenericAnyValue,
): Unwrap<GenericAnyValue>;

export function unwrap(anyValue: unknown) {
	return anyValue && typeof anyValue === "object" && keyWrappedValue in anyValue
		? anyValue[keyWrappedValue]
		: anyValue;
}
