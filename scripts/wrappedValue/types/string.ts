import { type TheValue } from "@scripts/common/theValue";

export type WrappedString<
	GenericString extends string = string,
> = TheValue<GenericString>;
