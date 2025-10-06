export function repeat(
	count: number,
): (input: string) => string;

export function repeat(
	input: string,
	count: number,
): string;

export function repeat(...args: [string, number] | [number]): any {
	if (args.length === 1) {
		const [count] = args;
		return (input: string) => repeat(input, count);
	}

	const [input, count] = args;

	if (count < 0 || !Number.isFinite(count)) {
		return "";
	}

	return input.repeat(count);
}
