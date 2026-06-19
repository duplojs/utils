import { type AnyTuple } from "./anyTuple";
import { type ComputedTypeError } from "./computedTypeError";

export type ForbiddenTupleWithUnknownLength<
	GenericTuple extends AnyTuple<unknown>,
> = (
	number extends GenericTuple["length"]
		? ComputedTypeError<"Tuple must have finite length.">
		: unknown
);
