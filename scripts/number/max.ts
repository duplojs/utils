export function max<
	GenericValue extends number,
>(comparison: number): (value: GenericValue) => number;

export function max<
	GenericValue extends number,
>(value: GenericValue, comparison: number): number;

export function max(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [comparison] = args;
		return (value: number) => max(value, comparison);
	}

	const [value, comparison] = args;

	return Math.max(value, comparison);
}
