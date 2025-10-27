export function greaterThan<
	GenericValue extends number,
>(threshold: number): (value: GenericValue) => boolean;

export function greaterThan<
	GenericValue extends number,
>(value: GenericValue, threshold: number): boolean;

export function greaterThan(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (value: number) => greaterThan(value, threshold);
	}

	const [value, threshold] = args;

	return value > threshold;
}
