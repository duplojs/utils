import { type AnyFunction } from "@scripts/common";

interface ArrayFindAndSpliceInsertIndexParams {
	index: number;
}

export function findAndSpliceInsert<
	GenericElement extends unknown,
>(
	predicate: (element: GenericElement, params: ArrayFindAndSpliceInsertIndexParams) => boolean,
	elements: GenericElement[],
): (array: readonly GenericElement[]) => GenericElement[] | undefined;

export function findAndSpliceInsert<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindAndSpliceInsertIndexParams) => boolean,
	elements: GenericElement[],
): GenericElement[] | undefined;

export function findAndSpliceInsert(
	...args: [AnyFunction, unknown[]] | [readonly unknown[], AnyFunction, unknown[]]
) {
	if (args.length === 2) {
		const [predicate, elements] = args;
		return (array: unknown[]) => findAndSpliceInsert(array, predicate, elements);
	}

	const [array, predicate, elements] = args;

	for (let index = 0; index < array.length; index++) {
		if (predicate(array[index], { index })) {
			const newArray = [...array];
			newArray.splice(index, 0, ...elements);
			return newArray;
		}
	}

	return undefined;
}
