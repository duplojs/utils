import { type AnyFunction } from "@scripts/common";

export function findIndex<
	GenericElement extends unknown,
>(
	predicate: (element: GenericElement, index: number) => boolean,
): (array: GenericElement[]) => number | undefined;

export function findIndex<
	GenericElement extends unknown,
>(
	array: GenericElement[],
	predicate: (element: GenericElement, index: number) => boolean,
): number | undefined;

export function findIndex(...args: [unknown[], AnyFunction] | [AnyFunction]) {
	if (args.length === 1) {
		const [predicate] = args;
		return (array: unknown[]) => findIndex(array, predicate);
	}

	const [array, predicate] = args;

	const result = array.findIndex(predicate);

	return result === -1 ? undefined : result;
}
