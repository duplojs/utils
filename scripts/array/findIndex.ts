import { type AnyFunction } from "@scripts/common";

interface ArrayFindIndexParams {
	index: number;
}

export function findIndex<
	GenericElement extends unknown,
>(
	predicate: (element: GenericElement, params: ArrayFindIndexParams) => boolean,
): (array: GenericElement[]) => number | undefined;

export function findIndex<
	GenericElement extends unknown,
>(
	array: GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindIndexParams) => boolean,
): number | undefined;

export function findIndex(...args: [unknown[], AnyFunction] | [AnyFunction]) {
	if (args.length === 1) {
		const [predicate] = args;
		return (array: unknown[]) => findIndex(array, predicate);
	}

	const [array, predicate] = args;

	for (let index = 0; index < array.length; index++) {
		if (predicate(array[index], { index })) {
			return index;
		}
	}

	return undefined;
}
