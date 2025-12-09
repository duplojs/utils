export function chunk<
	GenericInput extends readonly unknown[],
>(
	size: number,
): (input: GenericInput) => GenericInput[];

export function chunk<
	GenericInput extends readonly unknown[],
>(
	input: GenericInput,
	size: number,
): GenericInput[];

export function chunk(...args: [number] | [unknown[], number]) {
	if (args.length === 1) {
		const [size] = args;
		return (input: unknown[]) => chunk(input, size);
	}

	const [input, size] = args;

	const result = [];

	for (let index = 0; index < input.length; index += size) {
		result.push(input.slice(index, index + size));
	}

	return result;
}
