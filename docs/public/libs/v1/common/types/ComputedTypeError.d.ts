declare const SymbolComputedTypeError: unique symbol;
export interface ComputedTypeError<GenericMessage extends string> {
    readonly [SymbolComputedTypeError]: GenericMessage;
}
export {};
