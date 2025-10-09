import { type AnyTuple, type IsEqual } from "@scripts/common";

export type TupleHasSpread<
	GenericTuple extends AnyTuple,
> = IsEqual<GenericTuple["length"], number>;
