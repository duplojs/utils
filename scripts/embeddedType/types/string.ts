import { type TheValue } from "@scripts/common/theValue";

export type EmbeddedString<
	GenericString extends string = string,
> = TheValue<GenericString>;
