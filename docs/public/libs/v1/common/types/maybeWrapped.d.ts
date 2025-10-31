import { type WrappedValue } from "../wrapValue";
export type MaybeWrapped<GenericInnerValue extends unknown> = GenericInnerValue | WrappedValue<GenericInnerValue>;
