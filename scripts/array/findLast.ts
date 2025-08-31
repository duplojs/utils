import { type AnyFunction } from "@scripts/common";

interface ArrayFindLastParams {
	index: number;
}

export function findLast<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	predicate: (element: GenericElement, params: ArrayFindLastParams) => element is GenericOutput,
): (array: GenericElement[]) => GenericOutput | undefined;
export function findLast<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	array: GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindLastParams) => element is GenericOutput,
): GenericOutput | undefined;
export function findLast<
	GenericElement extends unknown,
>(
	predicate: (element: GenericElement, params: ArrayFindLastParams) => boolean,
): (array: GenericElement[]) => GenericElement | undefined;
export function findLast<
	GenericElement extends unknown,
>(
	array: GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindLastParams) => boolean,
): GenericElement | undefined;
export function findLast(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;
		return (array: unknown[]) => findLast(array, predicate as never);
	}

	const [array, predicate] = args;

	for (let index = array.length - 1; index >= 0; index--) {
		const item = array[index]!;

		if (predicate(item, { index })) {
			return item;
		}
	}

	return undefined;
}
