import { type AnyValue } from "./types";
export declare function justReturn<GenericInput extends unknown, GenericValue extends AnyValue>(value: GenericValue): (input: GenericInput) => GenericValue;
export declare function justReturn<GenericInput extends unknown, GenericValue extends AnyValue>(input: GenericInput, value: GenericValue): GenericValue;
