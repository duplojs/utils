/**
 * {@include number/modulo/index.md}
 */
export function modulo<
	GenericValue extends number,
>(divisor: number): (value: GenericValue) => number;

export function modulo<
	GenericValue extends number,
>(value: GenericValue, divisor: number): number;

export function modulo(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [divisor] = args;
		return (value: number) => modulo(value, divisor);
	}

	const [value, divisor] = args;

	return value % divisor;
}
