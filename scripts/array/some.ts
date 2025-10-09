import { type AnyFunction } from "@scripts/common";

interface ArraySomeParams {
	index: number;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the array structure and avoids this inference bug.
export function some<
	GenericArray extends readonly unknown[],
>(
	predicate: (
		element: GenericArray[number],
		params: ArraySomeParams
	) => boolean,
): (array: GenericArray) => boolean;

export function some<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	predicate: (
		element: GenericElement,
		params: ArraySomeParams
	) => boolean,
): boolean;

export function some(...args: [AnyFunction] | [readonly unknown[], AnyFunction]) {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => some(array, predicate as never);
	}

	const [array, predicate] = args;

	return array.some((element, index) => predicate(element, { index }));
}
