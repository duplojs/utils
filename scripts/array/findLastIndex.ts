import { type AnyFunction } from "@scripts/common";

interface ArrayFindLastIndexParams {
	index: number;
}

export function findLastIndex<
	GenericElement extends unknown,
>(
	predicate: (element: GenericElement, params: ArrayFindLastIndexParams) => boolean,
): (array: readonly GenericElement[]) => number | undefined;

export function findLastIndex<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindLastIndexParams) => boolean,
): number | undefined;

export function findLastIndex(...args: [readonly unknown[], AnyFunction] | [AnyFunction]) {
	if (args.length === 1) {
		const [predicate] = args;
		return (array: unknown[]) => findLastIndex(array, predicate as never);
	}

	const [array, predicate] = args;

	for (let index = array.length - 1; index >= 0; index--) {
		const item = array[index]!;

		if (predicate(item, { index })) {
			return index;
		}
	}

	return undefined;
}
