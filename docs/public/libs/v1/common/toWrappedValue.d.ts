import { type WrappedValue } from "../common/wrapValue";
import { type MaybeWrapped } from "./types/maybeWrapped";
import { type AnyValue } from "./types";
export declare function toWrappedValue<GenericInnerValue extends AnyValue, GenericValue extends MaybeWrapped<GenericInnerValue>>(value: GenericValue): GenericValue extends WrappedValue ? GenericValue : WrappedValue<GenericValue>;
