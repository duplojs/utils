import { type AnyTuple } from "@scripts/common/types/anyTuple";
import { type MaxElements, type RemoveKind, type ReverseTuple } from "@scripts/array";

/**
 * {@include array/reverse/index.md}
 */
export function reverse<
	GenericArray extends readonly unknown[],
>(
	array: GenericArray,
): GenericArray extends AnyTuple
		? (
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
