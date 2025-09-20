export function add(operand: number): (value: number) => number;

export function add(value: number, operand: number): number;

export function add(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [operand] = args;
		return (value: number) => add(value, operand);
	}

	const [value, operand] = args;

	return value + operand;
}
