import { type AnyFunction } from "@scripts/common";

interface ArrayFindAndSpliceDeleteIndexParams {
	index: number;
}

/**
 * {@include array/findAndSpliceDelete/index.md}
 */
export function findAndSpliceDelete<GenericElement extends unknown>(
	predicate: (element: GenericElement, params: ArrayFindAndSpliceDeleteIndexParams) => boolean,
	deleteCount: number,
): (array: readonly GenericElement[]) => GenericElement[] | undefined;

export function findAndSpliceDelete<GenericElement extends unknown>(
	array: readonly GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindAndSpliceDeleteIndexParams) => boolean,
	deleteCount: number,
): GenericElement[] | undefined;

export function findAndSpliceDelete(
	...args: [AnyFunction, number] | [readonly unknown[], AnyFunction, number]
) {
	if (args.length === 2) {
		const [predicate, deleteCount] = args;
		return (array: unknown[]) => findAndSpliceDelete(array, predicate, deleteCount);
	}

	const [array, predicate, deleteCount] = args;

	for (let index = 0; index < array.length; index++) {
		if (predicate(array[index], { index })) {
			const newArray = [...array];
			newArray.splice(index, deleteCount);
			return newArray;
		}
	}

	return undefined;
}
