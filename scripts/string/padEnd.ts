export function padEnd(
	targetLength: number,
	padString: string,
): (str: string) => string;

export function padEnd(
	str: string,
	targetLength: number,
	padString: string,
): string;

export function padEnd(...args: [string, number, string] | [number, string]): any {
	if (args.length === 2) {
		const [targetLength, padString] = args;
		return (str: string) => padEnd(str, targetLength, padString);
	}

	const [str, targetLength, padString] = args;

	return str.padEnd(targetLength, padString);
}
