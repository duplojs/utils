import { type TheValue } from "@scripts/common/theValue";

export type EmbeddedNumber<
	GenericNumber extends number = number,
> = TheValue<GenericNumber>;
