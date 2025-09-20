export function divide(divisor: number): (value: number) => number;

export function divide(value: number, divisor: number): number;

export function divide(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [divisor] = args;
		return (value: number) => divide(value, divisor);
	}

	const [value, divisor] = args;

	return value / divisor;
}
