import { type AnyTuple } from "@scripts/common";
import { type MaxElements, type RemoveKind, type TupleHasSpread } from "./types";

/**
 * {@include array/pop/index.md}
 */
export function pop<
	const GenericArray extends readonly unknown[],
>(array: GenericArray): GenericArray extends AnyTuple
	? TupleHasSpread<RemoveKind<GenericArray>> extends true
		? GenericArray[number][]
		: RemoveKind<GenericArray> extends readonly [...infer InferredRest, any]
			? (
				& InferredRest
				& (
					GenericArray extends MaxElements<infer InferredMax>
						? MaxElements<InferredMax>
						: unknown
				)
			)
			: GenericArray
	: GenericArray {
	return array.slice(0, -1) as never;
}
