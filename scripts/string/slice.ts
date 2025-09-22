export function slice(
	start: number,
	end: number,
): (str: string) => string;

export function slice(
	str: string,
	start: number,
	end: number,
): string;

export function slice(...args: [string, number, number] | [number, number]): any {
	if (args.length === 2) {
		const [start, end] = args;
		return (str: string) => slice(str, start, end);
	}

	const [str, start, end] = args;

	return str.slice(start, end);
}
