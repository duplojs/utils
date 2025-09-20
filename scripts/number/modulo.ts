export function modulo(divisor: number): (value: number) => number;

export function modulo(value: number, divisor: number): number;

export function modulo(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [divisor] = args;
		return (value: number) => modulo(value, divisor);
	}

	const [value, divisor] = args;

	return value % divisor;
}
