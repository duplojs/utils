export function substring<
	GenericInput extends string,
>(
	start: number,
	end?: number,
): (input: GenericInput) => string;

export function substring(
	input: string,
	start: number,
	end?: number,
): string;

export function substring(...args: [string, number, number?] | [number, number?]): any {
	if (typeof args[0] === "number") {
		const [start, end] = args;
		return (input: string) => substring(input, start, end);
	}

	const [input, start, end] = args as [string, number, number?];

	return input.substring(start, end);
}
