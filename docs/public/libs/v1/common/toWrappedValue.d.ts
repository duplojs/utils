import { type WrappedValue } from "../common/wrapValue";
import { type MaybeWrapped } from "./types/maybeWrapped";
import { type AnyValue } from "./types";
export type ToWrappedValue<GenericValue extends unknown> = GenericValue extends WrappedValue ? GenericValue : WrappedValue<GenericValue>;
export declare function toWrappedValue<GenericInnerValue extends AnyValue, GenericValue extends MaybeWrapped<GenericInnerValue>>(value: GenericValue): ToWrappedValue<GenericValue>;
