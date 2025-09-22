export function padStart(
	targetLength: number,
	padString: string,
): (str: string) => string;

export function padStart(
	str: string,
	targetLength: number,
	padString: string,
): string;

export function padStart(...args: [string, number, string] | [number, string]): any {
	if (args.length === 2) {
		const [targetLength, padString] = args;
		return (str: string) => padStart(str, targetLength, padString);
	}

	const [str, targetLength, padString] = args;

	return str.padStart(targetLength, padString);
}
