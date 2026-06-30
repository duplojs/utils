import { type AnyTuple } from "@scripts/common/types/anyTuple";
import { type MaxElements, type RemoveKind, type ReverseTuple, type TupleHasSpread } from "@scripts/array";

/**
 * {@include array/reverse/index.md}
 */
export function reverse<
	GenericArray extends readonly unknown[],
>(
	array: GenericArray,
): GenericArray extends AnyTuple
		? TupleHasSpread<RemoveKind<GenericArray>> extends true
			? GenericArray[number][]
			: (
				& ReverseTuple<RemoveKind<GenericArray>>
				& (
					GenericArray extends MaxElements<infer InferredMax>
						? MaxElements<InferredMax>
						: unknown
				)
			)
		: GenericArray {
	return [...array].reverse() as never;
}
