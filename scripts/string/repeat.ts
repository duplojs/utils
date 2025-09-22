export function repeat(
	count: number,
): (str: string) => string;

export function repeat(
	str: string,
	count: number,
): string;

export function repeat(...args: [string, number] | [number]): any {
	if (args.length === 1) {
		const [count] = args;
		return (str: string) => repeat(str, count);
	}

	const [str, count] = args;

	return str.repeat(count);
}
