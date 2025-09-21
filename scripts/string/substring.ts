export function substring(
	start: number,
	end?: number,
): (str: string) => string;

export function substring(
	str: string,
	start: number,
	end?: number,
): string;

export function substring(...args: [string, number, number?] | [number, number?]): any {
	if (typeof args[0] === "number") {
		const [start, end] = args;
		return (str: string) => substring(str, start, end);
	}

	const [str, start, end] = args as [string, number, number?];

	return str.substring(start, end);
}
