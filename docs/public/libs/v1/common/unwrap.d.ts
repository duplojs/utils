import { type WrappedValue } from "./wrapValue";
export type Unwrap<GenericAnyValue extends unknown> = GenericAnyValue extends WrappedValue<infer inferredValue> ? inferredValue : GenericAnyValue;
export declare function unwrap<const GenericValue extends unknown>(anyValue: GenericValue): Unwrap<GenericValue>;
