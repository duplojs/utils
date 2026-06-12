import { type AnyTuple } from "@scripts/common";
import { type ShiftTuple } from "@scripts/array/types/shiftTuple";
import { type MaxElements, type RemoveKind } from "./types";

/**
 * {@include array/shift/index.md}
 */
export function shift<
	const GenericArray extends readonly unknown[],
>(array: GenericArray): GenericArray extends AnyTuple
	? (
		& ShiftTuple<RemoveKind<GenericArray>>
		& (
			GenericArray extends MaxElements<infer InferredMax>
				? MaxElements<InferredMax>
				: unknown
		)
	)
	: GenericArray {
	return array.slice(1) as never;
}
