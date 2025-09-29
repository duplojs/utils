const SymbolWrappedValue = Symbol("SymbolWrappedValue");
export type SymbolWrappedValue = typeof SymbolWrappedValue;

export interface WrappedValue<
	GenericValue extends unknown = unknown,
> {
	[SymbolWrappedValue]: GenericValue;
}

export function wrapValue<
	const GenericValue extends unknown,
>(value: GenericValue): WrappedValue<GenericValue> {
	return {
		value,
	} as never;
}

export function isWrappedValue<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, Record<"value", any>> {
	return !!input && typeof input === "object" && "value" in input;
}
