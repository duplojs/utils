import { type AnyFunction } from "@scripts/common";

export function arrayFindLastPredicate<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	predicate: (element: GenericElement, index: number) => element is GenericOutput,
): (array: GenericElement[]) => GenericOutput | undefined;

export function arrayFindLastPredicate<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	array: GenericElement[],
	predicate: (element: GenericElement, index: number) => element is GenericOutput,
): GenericOutput | undefined;

export function arrayFindLastPredicate(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;
		return (array: unknown[]) => arrayFindLastPredicate(array, predicate as never);
	}
	const [array, predicate] = args;
	for (let index = array.length - 1; index >= 0; index--) {
		const item = array[index]!;
		if (predicate(item, index)) {
			return item;
		}
	}
	return undefined;
}
