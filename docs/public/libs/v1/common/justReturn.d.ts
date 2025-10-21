import { type AnyValue } from "./types";
export declare function justReturn<GenericValue extends AnyValue>(value: GenericValue): (input: unknown) => GenericValue;
export declare function justReturn<GenericValue extends AnyValue>(input: unknown, value: GenericValue): GenericValue;
