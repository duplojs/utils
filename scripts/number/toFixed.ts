/**
 * {@include number/toFixed/index.md}
 */
export function toFixed<
	GenericValue extends number,
>(digits: number): (value: GenericValue) => string;

export function toFixed<
	GenericValue extends number,
>(value: GenericValue, digits: number): string;

export function toFixed(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [digits] = args;
		return (value: number) => toFixed(value, digits);
	}

	const [value, digits] = args;

	return value.toFixed(digits);
}
