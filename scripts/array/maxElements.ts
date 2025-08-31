export function maxElements(maxLength: number): (array: unknown[]) => boolean;
export function maxElements(array: unknown[], maxLength: number): boolean;
export function maxElements(...args: [unknown[], number] | [number]): any {
	if (args.length === 1) {
		const [maxLength] = args;
		return (array: unknown[]) => maxElements(array, maxLength);
	}
	const [array, maxLength] = args;

	return array.length <= maxLength;
}
