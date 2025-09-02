export function spliceReplace<
	GenericElement extends unknown,
>(
	indexFrom: number,
	elements: GenericElement[],
): (array: GenericElement[]) => GenericElement[];

export function spliceReplace<
	GenericElement extends unknown,
>(
	array: GenericElement[],
	indexFrom: number,
	elements: GenericElement[],
): GenericElement[];

export function spliceReplace(
	...args: [number, unknown[]] | [unknown[], number, unknown[]]
) {
	if (args.length === 2) {
		const [indexFrom, elements] = args;
		return (array: unknown[]) => spliceReplace(array, indexFrom, elements);
	}

	const [array, indexFrom, elements] = args;

	const copy = [...array];
	copy.splice(indexFrom, elements.length, ...elements);

	return copy;
}

