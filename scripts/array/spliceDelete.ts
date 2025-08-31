export function spliceDelete<GenericElement extends unknown>(
	indexTo: number,
	deleteCount: number,
): (array: GenericElement[]) => GenericElement[];

export function spliceDelete<GenericElement extends unknown>(
	array: GenericElement[],
	indexTo: number,
	deleteCount: number,
): GenericElement[];

export function spliceDelete(
	...args: [number, number] | [unknown[], number, number]
) {
	if (args.length === 2) {
		const [indexTo, deleteCount] = args;
		return (array: unknown[]) => spliceDelete(array, indexTo, deleteCount);
	}

	const [array, indexTo, deleteCount] = args;

	const copy = [...array];
	copy.splice(indexTo, deleteCount);

	return copy;
}

