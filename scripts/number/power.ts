export function power<
	GenericValue extends number,
>(exponent: number): (value: GenericValue) => number;

export function power<
	GenericValue extends number,
>(value: GenericValue, exponent: number): number;

export function power(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [exponent] = args;
		return (value: number) => power(value, exponent);
	}

	const [value, exponent] = args;

	return value ** exponent;
}
