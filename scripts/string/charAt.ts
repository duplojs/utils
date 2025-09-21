export function charAt(
	index: number,
): (str: string) => string;

export function charAt(
	str: string,
	index: number,
): string;

export function charAt(...args: [string, number] | [number]): any {
	if (args.length === 1) {
		const [index] = args;
		return (str: string) => charAt(str, index);
	}

	const [str, index] = args;

	return str.charAt(index);
}
