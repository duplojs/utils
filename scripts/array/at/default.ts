import type { IsEqual } from "@scripts/common";

export type AtArray<
	GenericArray extends readonly unknown[],
	GenericIndex extends number,
> = IsEqual<GenericArray["length"], number> extends true
	? GenericArray[number] | undefined
	: GenericIndex extends keyof GenericArray
		? GenericArray[GenericIndex]
		: GenericArray[number] | undefined;

/**
 * {@include array/at/index.md}
 */
export function at<
	GenericArray extends readonly unknown[],
	GenericIndex extends number,
>(
	index: GenericIndex,
): (array: GenericArray) => AtArray<GenericArray, GenericIndex>;

export function at<
	GenericArray extends readonly unknown[],
	GenericIndex extends number,
>(
	array: GenericArray,
	index: GenericIndex,
): AtArray<GenericArray, GenericIndex>;

export function at(...args: [readonly unknown[], number] | [number]) {
	if (args.length === 1) {
		const [index] = args;
		return (array: unknown[]) => at(array, index);
	}

	const [input, index] = args;

	return input.at(index);
}
