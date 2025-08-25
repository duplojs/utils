import { type TheValue } from "@scripts/common/theValue";

export type WrappedNumber<
	GenericNumber extends number = number,
> = TheValue<GenericNumber>;
