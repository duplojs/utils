import { type WrappedValue } from "../../common/wrapValue";
export type MaybeWrapped<GenericInnerValue extends unknown> = GenericInnerValue | WrappedValue<GenericInnerValue>;
