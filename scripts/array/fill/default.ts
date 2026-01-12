/**
 * {@include array/fill/index.md}
 */
export function fill<
	GenericElement extends unknown,
>(
	value: GenericElement,
	start: number,
	end: number,
): (array: readonly GenericElement[]) => GenericElement[];

export function fill<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	value: GenericElement,
	start: number,
	end: number,
): GenericElement[];

export function fill(...args: [readonly unknown[], unknown, number, number] | [unknown, number, number]) {
	if (args.length === 3) {
		const [value, start, end] = args;
		return (array: unknown[]) => fill(array, value, start, end);
	}

	const [array, value, start, end] = args;

	return [...array].fill(value, start, end);
}
