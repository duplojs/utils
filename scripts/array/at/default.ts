import type { AtTuple } from "../types";

/**
 * {@include array/at/index.md}
 */
export function at<
	GenericTuple extends readonly unknown[],
	GenericIndex extends number,
>(
	index: GenericIndex,
): (array: GenericTuple) => AtTuple<GenericTuple, GenericIndex>;

export function at<
	GenericElement extends unknown,
>(
	index: number,
): (array: readonly GenericElement[]) => GenericElement | undefined;

export function at<
	GenericTuple extends readonly unknown[],
	GenericIndex extends number,
>(
	array: GenericTuple,
	index: GenericIndex,
): AtTuple<GenericTuple, GenericIndex>;

export function at<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	index: number,
): GenericElement | undefined;

export function at(...args: [readonly unknown[], number] | [number]) {
	if (args.length === 1) {
		const [index] = args;
		return (array: unknown[]) => at(array, index);
	}

	const [input, index] = args;

	return input.at(index);
}
