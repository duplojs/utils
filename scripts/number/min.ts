export function min(comparison: number): (value: number) => number;

export function min(value: number, comparison: number): number;

export function min(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [comparison] = args;
		return (value: number) => min(value, comparison);
	}

	const [value, comparison] = args;

	return Math.min(value, comparison);
}
