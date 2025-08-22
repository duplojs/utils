import { type TheValue } from "@scripts/common/theValue";

export type EmbeddedBigint<
	GenericBigint extends bigint = bigint,
> = TheValue<GenericBigint>;
