import { type AnyFunction } from "@scripts/common";

interface ArrayFindIndexParams {
	index: number;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the array structure and avoids this inference bug.
export function findIndex<
	GenericArray extends readonly unknown[],
>(
	predicate: (element: GenericArray[number], params: ArrayFindIndexParams) => boolean,
): (array: GenericArray) => number | undefined;

export function findIndex<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindIndexParams) => boolean,
): number | undefined;

export function findIndex(...args: [readonly unknown[], AnyFunction] | [AnyFunction]) {
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
