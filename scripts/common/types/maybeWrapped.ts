import { type WrappedValue } from "@scripts/common/wrapValue";

export type MaybeWrapped<
	GenericInnerValue extends unknown,
> = GenericInnerValue | WrappedValue<GenericInnerValue>;
