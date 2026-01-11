const SymbolWrappedValue = Symbol.for("@duplojs/utils/SymbolWrappedValue");
export type SymbolWrappedValue = typeof SymbolWrappedValue;
export const keyWrappedValue = "@duplojs/utils/value";

export interface WrappedValue<
	GenericValue extends unknown = unknown,
> {
	[SymbolWrappedValue]: GenericValue;
}

/**
 * {@include common/wrapValue/index.md}
 */
export function wrapValue<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): WrappedValue<GenericValue> {
	return {
		[keyWrappedValue]: value,
	} as never;
}

/**
 * {@include common/isWrappedValue/index.md}
 */
export function isWrappedValue<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, WrappedValue<any>> {
	return !!input && typeof input === "object" && keyWrappedValue in input;
}

/**
 * {@include common/isRuntimeWrappedValueKey/index.md}
 */
export function isRuntimeWrappedValueKey(
	value: string,
) {
	return value.startsWith(keyWrappedValue);
}
