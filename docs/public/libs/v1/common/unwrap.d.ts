import { type WrappedValue } from "./wrapValue";
import { type AnyValue } from "./types/anyValue";
export type Unwrap<GenericAnyValue extends unknown> = GenericAnyValue extends WrappedValue<infer inferredValue> ? inferredValue : GenericAnyValue;
export declare function unwrap<GenericValue extends AnyValue, GenericAnyValue extends AnyValue | WrappedValue<GenericValue>>(anyValue: GenericAnyValue): Unwrap<GenericAnyValue>;
