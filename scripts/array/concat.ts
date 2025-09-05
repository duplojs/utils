export function concat<
	GenericElement extends unknown,
>(
	elements: GenericElement[],
): (array: GenericElement[]) => GenericElement[];

export function concat<
	GenericElement extends unknown,
>(
	array: GenericElement[],
	elements: GenericElement[],
): GenericElement[];

export function concat(...args: [unknown[], unknown[]] | [unknown[]]) {
	if (args.length === 1) {
		const [elements] = args;
		return (array: unknown[]) => concat(array, elements);
	}
	const [array, elements] = args;
	return array.concat(elements);
}
