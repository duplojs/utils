const SymbolWrappedValue = Symbol.for("@duplojs/utils/SymbolWrappedValue");
export type SymbolWrappedValue = typeof SymbolWrappedValue;
export const keyWrappedValue = "@duplojs/utils/value";

export interface WrappedValue<
	GenericValue extends unknown = unknown,
> {
	[SymbolWrappedValue]: GenericValue;
}

export function wrapValue<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): WrappedValue<GenericValue> {
	return {
		[keyWrappedValue]: value,
	} as never;
}

export function isWrappedValue<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, WrappedValue<any>> {
	return !!input && typeof input === "object" && keyWrappedValue in input;
}
