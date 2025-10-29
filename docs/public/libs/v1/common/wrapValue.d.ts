declare const SymbolWrappedValue: unique symbol;
export type SymbolWrappedValue = typeof SymbolWrappedValue;
export declare const keyWrappedValue = "@duplojs/utils/value";
export interface WrappedValue<GenericValue extends unknown = unknown> {
    [SymbolWrappedValue]: GenericValue;
}
export declare function wrapValue<const GenericValue extends unknown>(value: GenericValue): WrappedValue<GenericValue>;
export declare function isWrappedValue<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, WrappedValue<any>>;
export declare function isRuntimeWrappedValueKey(value: string): boolean;
export {};
