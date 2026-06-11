declare const SymbolComputedTypeError: unique symbol;
export interface ComputedTypeError<GenericMessage extends string> {
    readonly [SymbolComputedTypeError]: GenericMessage;
}
export type SimplifyComputedTypeError<GenericInput extends unknown> = GenericInput extends ComputedTypeError<infer InferredMessage> ? ComputedTypeError<InferredMessage> : GenericInput;
export {};
