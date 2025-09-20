export function multiply(operand: number): (value: number) => number;

export function multiply(value: number, operand: number): number;

export function multiply(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [operand] = args;
		return (value: number) => multiply(value, operand);
	}

	const [value, operand] = args;

	return value * operand;
}
