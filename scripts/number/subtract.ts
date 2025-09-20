export function subtract(subtrahend: number): (value: number) => number;

export function subtract(value: number, subtrahend: number): number;

export function subtract(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [subtrahend] = args;
		return (value: number) => subtract(value, subtrahend);
	}

	const [value, subtrahend] = args;

	return value - subtrahend;
}
