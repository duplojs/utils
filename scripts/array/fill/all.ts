export function fillAll<
	GenericElement extends unknown,
>(
	value: GenericElement,
): (array: readonly GenericElement[]) => GenericElement[];

export function fillAll<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	value: GenericElement,
): GenericElement[];

export function fillAll(...args: [readonly unknown[], unknown] | [unknown]) {
	if (args.length === 1) {
		const [value] = args;
		return (array: unknown[]) => fillAll(array, value);
	}

	const [array, value] = args;

	return [...array].fill(value);
}
