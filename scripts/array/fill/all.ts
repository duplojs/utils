export function fillAll<
	GenericElement extends unknown,
>(
	element: GenericElement,
): (input: readonly unknown[]) => GenericElement[];

export function fillAll<
	GenericElement extends unknown,
>(
	input: readonly unknown[],
	element: GenericElement,
): GenericElement[];

export function fillAll(...args: [readonly unknown[], unknown] | [unknown]) {
	if (args.length === 1) {
		const [value] = args;
		return (array: unknown[]) => fillAll(array, value);
	}

	const [array, value] = args;

	return [...array].fill(value);
}
