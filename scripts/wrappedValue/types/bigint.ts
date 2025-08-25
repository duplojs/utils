import { type TheValue } from "@scripts/common/theValue";

export type WrappedBigint<
	GenericBigint extends bigint = bigint,
> = TheValue<GenericBigint>;
