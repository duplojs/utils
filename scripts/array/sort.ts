import { type AnyFunction } from "@scripts/common";

/**
 * {@include array/sort/index.md}
 */
export function sort<GenericElement extends unknown>(
	compareFn: (
		first: GenericElement,
		second: GenericElement,
	) => number,
): (array: readonly GenericElement[]) => GenericElement[];

export function sort<GenericElement extends unknown>(
	array: readonly GenericElement[],
	compareFn: (
		first: GenericElement,
		second: GenericElement,
	) => number,
): GenericElement[];

export function sort(...args: [AnyFunction] | [readonly unknown[], AnyFunction]) {
	if (args.length === 1) {
		const [compareFn] = args;
		return (array: unknown[]) => sort(array, compareFn);
	}

	const [array, compareFn] = args;

	return [...array].sort(compareFn);
}
