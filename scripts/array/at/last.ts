import { type AnyTuple } from "@scripts/common";
import { type RemoveKind } from "../types";

/**
 * {@include array/last/index.md}
 */
export function last<
	GenericArray extends readonly unknown[],
>(
	array: GenericArray,
): RemoveKind<GenericArray> extends readonly [...any[], infer InferredValue]
		? InferredValue
		: GenericArray extends AnyTuple
			? GenericArray[number]
			: GenericArray[number] | undefined {
	return array.at(-1) as never;
}
