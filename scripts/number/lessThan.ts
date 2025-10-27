export function lessThan<
	GenericValue extends number,
>(threshold: number): (value: GenericValue) => boolean;

export function lessThan<
	GenericValue extends number,
>(value: GenericValue, threshold: number): boolean;

export function lessThan(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (value: number) => lessThan(value, threshold);
	}

	const [value, threshold] = args;

	return value < threshold;
}
