import { type AnyFunction } from "@scripts/common";

export function sort<GenericElement extends unknown>(
	compareFn: (
		first: GenericElement,
		second: GenericElement,
	) => number,
): (array: GenericElement[]) => GenericElement[];

export function sort<GenericElement extends unknown>(
	array: GenericElement[],
	compareFn: (
		first: GenericElement,
		second: GenericElement,
	) => number,
): GenericElement[];

export function sort(...args: [AnyFunction] | [unknown[], AnyFunction]) {
	if (args.length === 1) {
		const [compareFn] = args;
		return (array: unknown[]) => sort(array, compareFn);
	}

	const [array, compareFn] = args;

	return [...array].sort(compareFn);
}
