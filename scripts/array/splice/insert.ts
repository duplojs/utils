export function spliceInsert<GenericElement extends unknown>(
	indexFrom: number,
	elements: GenericElement[],
): (array: GenericElement[]) => GenericElement[];

export function spliceInsert<GenericElement extends unknown>(
	array: GenericElement[],
	indexFrom: number,
	elements: GenericElement[],
): GenericElement[];

export function spliceInsert(
	...args: [number, unknown[]] | [unknown[], number, unknown[]]
) {
	if (args.length === 2) {
		const [indexFrom, elements] = args;
		return (array: unknown[]) => spliceInsert(array, indexFrom, elements);
	}

	const [array, indexFrom, elements] = args;

	const copy = [...array];
	copy.splice(indexFrom, 0, ...elements);

	return copy;
}
