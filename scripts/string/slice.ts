export function slice(
	start: number,
	end: number,
): (input: string) => string;

export function slice(
	input: string,
	start: number,
	end: number,
): string;

export function slice(...args: [string, number, number] | [number, number]): any {
	if (args.length === 2) {
		const [start, end] = args;
		return (input: string) => slice(input, start, end);
	}

	const [input, start, end] = args;

	return input.slice(start, end);
}
