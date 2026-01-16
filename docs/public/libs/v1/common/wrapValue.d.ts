declare const SymbolWrappedValue: unique symbol;
export type SymbolWrappedValue = typeof SymbolWrappedValue;
export declare const keyWrappedValue = "@duplojs/utils/value";
export interface WrappedValue<GenericValue extends unknown = unknown> {
    [SymbolWrappedValue]: GenericValue;
}
/**
 * The wrapValue() function wraps a value in a marked container (SymbolWrappedValue) to identify it unambiguously in composite structures.
 * 
 * Signature: `wrapValue(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = wrapValue({ id: 1 });
 * 
 * // type: WrappedValue<{ readonly id: 1 }>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/wrapValue
 * 
 */
export declare function wrapValue<const GenericValue extends unknown>(value: GenericValue): WrappedValue<GenericValue>;
/**
 * The isWrappedValue() function is a type guard that checks whether a value is a WrappedValue created via wrapValue/toWrappedValue.
 * 
 * Signature: `isWrappedValue(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybe = true ? wrapValue(123) : null;
 * 
 * if (isWrappedValue(maybe)) {
 * 	// type: WrappedValue<123>
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/isWrappedValue
 * 
 */
export declare function isWrappedValue<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, WrappedValue<any>>;
/**
 * The isRuntimeWrappedValueKey() function checks whether a string key matches the runtime marker of a WrappedValue (@duplojs/utils/value).
 * 
 * Signature: `isRuntimeWrappedValueKey(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const matches = isRuntimeWrappedValueKey(keyWrappedValue);
 * // matches: true
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/isRuntimeWrappedValueKey
 * 
 */
export declare function isRuntimeWrappedValueKey(value: string): boolean;
export {};
