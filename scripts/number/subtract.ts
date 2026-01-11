/**
 * {@include number/subtract/index.md}
 */
export function subtract<
	GenericValue extends number,
>(subtrahend: number): (value: GenericValue) => number;

export function subtract<
	GenericValue extends number,
>(value: GenericValue, subtrahend: number): number;

export function subtract(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [subtrahend] = args;
		return (value: number) => subtract(value, subtrahend);
	}

	const [value, subtrahend] = args;

	return value - subtrahend;
}
