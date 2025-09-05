import { type AnyFunction } from "@scripts/common";

interface ArrayEveryParams {
	index: number;
}

export function every<
	GenericElement extends unknown,
>(
	predicate: (
		element: GenericElement,
		params: ArrayEveryParams
	) => boolean,
): (array: readonly GenericElement[]) => boolean;

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
