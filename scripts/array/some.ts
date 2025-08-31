import { type AnyFunction } from "@scripts/common";

interface ArraySomeParams {
	index: number;
}

export function some<
	GenericElement extends unknown,
>(
	predicate: (
		item: GenericElement,
		params: ArraySomeParams
	) => boolean,
): (array: GenericElement[]) => boolean;
export function some<
	GenericElement extends unknown,
>(
	array: GenericElement[],
	predicate: (
		item: GenericElement,
		params: ArraySomeParams
	) => boolean,
): boolean;
export function some(...args: [AnyFunction] | [unknown[], AnyFunction]) {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => some(array, predicate as never);
	}

	const [array, predicate] = args;

	return array.some((element, index) => predicate(element, { index }));
}
