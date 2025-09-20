export function max(comparison: number): (value: number) => number;

export function max(value: number, comparison: number): number;

export function max(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [comparison] = args;
		return (value: number) => max(value, comparison);
	}

	const [value, comparison] = args;

	return Math.max(value, comparison);
}
