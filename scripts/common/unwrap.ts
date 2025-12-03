import { keyWrappedValue, type WrappedValue } from "./wrapValue";
export type Unwrap<
	GenericAnyValue extends unknown,
> = GenericAnyValue extends WrappedValue<infer inferredValue>
	? inferredValue
	: GenericAnyValue;

export function unwrap<
	const GenericValue extends unknown,
>(
	anyValue: GenericValue,
): Unwrap<GenericValue>;

export function unwrap(anyValue: unknown) {
	return anyValue && typeof anyValue === "object" && keyWrappedValue in anyValue
		? anyValue[keyWrappedValue]
		: anyValue;
}
