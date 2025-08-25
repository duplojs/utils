import { type TheValue } from "@scripts/common/theValue";

export type WrappedBoolean<
	GenericBoolean extends boolean = boolean,
> = TheValue<GenericBoolean>;
