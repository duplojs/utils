import { type AnyTuple } from "@scripts/common";

/**
 * {@include array/last/index.md}
 */
export function last<
	GenericArray extends readonly unknown[],
>(
	array: GenericArray,
): GenericArray extends readonly [...any[], infer InferredValue]
		? InferredValue
		: GenericArray extends AnyTuple
			? GenericArray[number]
			: GenericArray[number] | undefined {
	return array.at(-1) as never;
}
