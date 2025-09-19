import { type AnyFunction } from "@scripts/common";

interface ArrayFindAndSetIndexParams {
	index: number;
}

export function findAndSet<
	GenericElement extends unknown,
>(
	predicate: (element: GenericElement, params: ArrayFindAndSetIndexParams) => boolean,
	value: NoInfer<GenericElement>,
): (array: readonly GenericElement[]) => GenericElement[] | undefined;

export function findAndSet<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindAndSetIndexParams) => boolean,
	value: NoInfer<GenericElement>,
): GenericElement[] | undefined;

export function findAndSet(...args: [readonly unknown[], AnyFunction, unknown] | [AnyFunction, unknown]) {
	if (args.length === 2) {
		const [predicate, value] = args;
		return (array: unknown[]) => findAndSet(array, predicate, value);
	}

	const [array, predicate, value] = args;

	for (let index = 0; index < array.length; index++) {
		if (predicate(array[index], { index })) {
			const newArray = [...array];
			newArray[index] = value;
			return newArray;
		}
	}

	return undefined;
}
