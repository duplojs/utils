/**
 * {@include array/insert/index.md}
 */
export function insert<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[]
): (input: GenericElement) => GenericElement[];

export function insert<
	GenericElement extends unknown,
>(
	input: GenericElement,
	array: readonly GenericElement[],
): GenericElement[];

export function insert(...args: [unknown, readonly unknown[]] | [readonly unknown[]]) {
	if (args.length === 1) {
		const [array] = args;

		return (input: unknown) => insert(input, array);
	}

	const [input, array] = args;

	return [...array, input];
}
