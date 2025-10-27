export function less<
	GenericValue extends number,
>(threshold: number): (value: GenericValue) => boolean;

export function less<
	GenericValue extends number,
>(value: GenericValue, threshold: number): boolean;

export function less(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (value: number) => less(value, threshold);
	}

	const [value, threshold] = args;

	return value <= threshold;
}
