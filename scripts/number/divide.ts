/**
 * {@include number/divide/index.md}
 */
export function divide<
	GenericValue extends number,
>(divisor: number): (value: GenericValue) => number;

export function divide<
	GenericValue extends number,
>(value: GenericValue, divisor: number): number;

export function divide(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [divisor] = args;
		return (value: number) => divide(value, divisor);
	}

	const [value, divisor] = args;

	return value / divisor;
}
