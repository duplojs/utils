import { type TheValue } from "@scripts/common/theValue";
import { type WrappedAnyValue } from "./anyValue";

export type MaybeWrapped<
	GenericInnerValue extends WrappedAnyValue["value"],
> = GenericInnerValue | TheValue<GenericInnerValue>;
