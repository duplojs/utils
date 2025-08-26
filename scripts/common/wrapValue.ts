import { type AnyValue } from "./types/anyValue";

export interface WrappedValue<
	GenericValue extends unknown = unknown,
> {
	value: GenericValue;
}

export function wrapValue<
	GenericValue extends AnyValue,
>(value: GenericValue): WrappedValue<GenericValue> {
	return {
		value,
	};
}

export function isWrappedValue<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, Record<"value", any>> {
	return !!input && typeof input === "object" && "value" in input;
}
