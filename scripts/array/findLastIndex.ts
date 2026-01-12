import { type AnyFunction } from "@scripts/common";

interface ArrayFindLastIndexParams {
	index: number;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the array structure and avoids this inference bug.
/**
 * {@include array/findLastIndex/index.md}
 */
export function findLastIndex<
	GenericArray extends readonly unknown[],
>(
	predicate: (element: GenericArray[number], params: ArrayFindLastIndexParams) => boolean,
): (array: GenericArray) => number | undefined;

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
