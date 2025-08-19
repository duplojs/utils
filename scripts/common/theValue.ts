export type TheValue<
    GenericValue extends unknown,
> = {
    value: GenericValue
}

export function theValue<
	GenericValue extends unknown,
>(value: GenericValue): TheValue<GenericValue> {
	return {
		value
	}
}

export function hasValue<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, Record<"value", unknown>> {
	return input && typeof input === "object" && "value" in input
}