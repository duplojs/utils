export function maxElements(maxLength: number): (array: readonly unknown[]) => boolean;
export function maxElements(array: readonly unknown[], maxLength: number): boolean;
export function maxElements(...args: [readonly unknown[], number] | [number]): any {
	if (args.length === 1) {
		const [maxLength] = args;
		return (array: unknown[]) => maxElements(array, maxLength);
	}
	const [array, maxLength] = args;

	return array.length <= maxLength;
}
