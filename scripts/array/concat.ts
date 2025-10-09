export function concat<
	GenericElement extends unknown,
>(
	elements: readonly GenericElement[],
): (array: readonly GenericElement[]) => GenericElement[];

export function concat<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	elements: readonly GenericElement[],
	...elementsRest: readonly GenericElement[][]
): GenericElement[];

export function concat(...args: [readonly unknown[], readonly unknown[], ...unknown[]] | [readonly unknown[]]) {
	if (args.length === 1) {
		const [elements] = args;
		return (array: unknown[]) => concat(array, elements);
	}

	const [array, elements, ...elementsRest] = args;

	return array.concat(elements, ...elementsRest);
}
