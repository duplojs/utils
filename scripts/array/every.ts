import { type AnyFunction } from "@scripts/common";

interface ArrayEveryParams {
	index: number;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the array structure and avoids this inference bug.
export function every<
	GenericArray extends readonly unknown[],
>(
	predicate: (
		element: GenericArray[number],
		params: ArrayEveryParams
	) => boolean,
): (array: GenericArray) => boolean;

export function every<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	predicate: (
		element: GenericElement,
		params: ArrayEveryParams
	) => boolean,
): boolean;

export function every(...args: [AnyFunction] | [readonly unknown[], AnyFunction]) {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => every(array, predicate as never);
	}

	const [array, predicate] = args;

	return array.every((element, index) => predicate(element, { index }));
}
