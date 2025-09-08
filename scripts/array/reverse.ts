import { type AnyTuple } from "@scripts/common/types/anyTuple";
import { type ReverseTuple } from "@scripts/common/types/reverseTuple";

export function reverse<
	GenericArray extends readonly unknown[],
>(
	array: GenericArray,
): GenericArray extends AnyTuple
		? ReverseTuple<GenericArray>
		: GenericArray {
	return [...array].reverse() as never;
}
