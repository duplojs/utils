export function clamp<
	GenericValue extends number,
>(lowerBound: number, upperBound: number): (value: GenericValue) => number;

export function clamp<
	GenericValue extends number,
>(value: GenericValue, lowerBound: number, upperBound: number): number;

export function clamp(...args: [number, number] | [number, number, number]) {
	if (args.length === 2) {
		const [lowerBound, upperBound] = args;
		return (value: number) => clamp(value, lowerBound, upperBound);
	}

	const [value, lowerBound, upperBound] = args;
	const lower = Math.min(lowerBound, upperBound);
	const upper = Math.max(lowerBound, upperBound);

	return Math.min(Math.max(value, lower), upper);
}
