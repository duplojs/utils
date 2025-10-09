export function min<
	GenericValue extends number,
>(comparison: number): (value: GenericValue) => number;

export function min<
	GenericValue extends number,
>(value: GenericValue, comparison: number): number;

export function min(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [comparison] = args;
		return (value: number) => min(value, comparison);
	}

	const [value, comparison] = args;

	return Math.min(value, comparison);
}
