import { type WrappedValue } from "../common/wrapValue";
import { type MaybeWrapped } from "./types/maybeWrapped";
import { type AnyValue } from "./types";
export type ToWrappedValue<GenericValue extends unknown> = GenericValue extends WrappedValue ? GenericValue : WrappedValue<GenericValue>;

/**
 * The toWrappedValue() function ensures a value is wrapped: if it is already a WrappedValue, it is returned as is, otherwise it is wrapped.
 * 
 * Signature: `toWrappedValue(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const already = toWrappedValue({ id: 1 });
 * 
 * // type: WrappedValue<{ id: number }>
 * 
 * const again = toWrappedValue(already);
 * 
 * // type: WrappedValue<{ id: number }>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/toWrappedValue
 * 
 * @namespace C
 * 
 */
export declare function toWrappedValue<GenericInnerValue extends AnyValue, GenericValue extends MaybeWrapped<GenericInnerValue>>(value: GenericValue): ToWrappedValue<GenericValue>;
