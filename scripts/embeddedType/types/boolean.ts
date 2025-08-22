import { type TheValue } from "@scripts/common/theValue";

export type EmbeddedBoolean<
	GenericBoolean extends boolean = boolean,
> = TheValue<GenericBoolean>;
