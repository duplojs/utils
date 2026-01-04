/**
 * {@include number/greater/index.md}
 */
export function greater<
	GenericValue extends number,
>(threshold: number): (value: GenericValue) => boolean;

export function greater<
	GenericValue extends number,
>(value: GenericValue, threshold: number): boolean;

export function greater(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (value: number) => greater(value, threshold);
	}

	const [value, threshold] = args;

	return value >= threshold;
}
