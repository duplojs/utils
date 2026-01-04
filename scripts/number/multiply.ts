/**
 * {@include number/multiply/index.md}
 */
export function multiply<
	GenericValue extends number,
>(operand: number): (value: GenericValue) => number;

export function multiply<
	GenericValue extends number,
>(value: GenericValue, operand: number): number;

export function multiply(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [operand] = args;
		return (value: number) => multiply(value, operand);
	}

	const [value, operand] = args;

	return value * operand;
}
