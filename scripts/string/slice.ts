export function slice(
	start: number,
	end?: number,
): (str: string) => string;

export function slice(
	str: string,
	start: number,
	end?: number,
): string;

export function slice(...args: [string, number, number?] | [number, number?]): any {
	if (typeof args[0] === "number") {
		const [start, end] = args;
		return (str: string) => slice(str, start, end);
	}

	const [str, start, end] = args;

	return str.slice(start, end);
}
