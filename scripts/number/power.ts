export function power(exponent: number): (value: number) => number;

export function power(value: number, exponent: number): number;

export function power(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [exponent] = args;
		return (value: number) => power(value, exponent);
	}

	const [value, exponent] = args;

	return value ** exponent;
}
