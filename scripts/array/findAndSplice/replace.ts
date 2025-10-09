import { type AnyFunction } from "@scripts/common";

interface ArrayFindAndSpliceReplaceIndexParams {
	index: number;
}

export function findAndSpliceReplace<
	GenericElement extends unknown,
>(
	predicate: (element: GenericElement, params: ArrayFindAndSpliceReplaceIndexParams) => boolean,
	elements: GenericElement[],
): (array: readonly GenericElement[]) => GenericElement[] | undefined;

export function findAndSpliceReplace<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindAndSpliceReplaceIndexParams) => boolean,
	elements: GenericElement[],
): GenericElement[] | undefined;

export function findAndSpliceReplace(
	...args: [AnyFunction, unknown[]] | [readonly unknown[], AnyFunction, unknown[]]
) {
	if (args.length === 2) {
		const [predicate, elements] = args;
		return (array: unknown[]) => findAndSpliceReplace(array, predicate, elements);
	}

	const [array, predicate, elements] = args;

	for (let index = 0; index < array.length; index++) {
		if (predicate(array[index], { index })) {
			const newArray = [...array];
			newArray.splice(index, elements.length, ...elements);
			return newArray;
		}
	}

	return undefined;
}

