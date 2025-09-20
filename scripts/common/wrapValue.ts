export interface WrappedValue<
	GenericValue extends unknown = unknown,
> {
	value: GenericValue;
}

export function wrapValue<
	const GenericValue extends unknown,
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
