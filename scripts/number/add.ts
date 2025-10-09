export function add<
	GenericValue extends number,
>(operand: number): (value: GenericValue) => number;

export function add<
	GenericValue extends number,
>(value: GenericValue, operand: number): number;

export function add(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [operand] = args;
		return (value: number) => add(value, operand);
	}

	const [value, operand] = args;

	return value + operand;
}
