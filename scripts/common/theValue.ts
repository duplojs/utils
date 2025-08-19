import { type AnyValue } from "./types/AnyValue";

export interface TheValue<
	GenericValue extends unknown,
> {
	value: GenericValue;
}

export function theValue<
	GenericValue extends AnyValue,
>(value: GenericValue): TheValue<GenericValue> {
	return {
		value,
	};
}

export function hasValue<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, Record<"value", unknown>> {
	return !!input && typeof input === "object" && "value" in input;
}
