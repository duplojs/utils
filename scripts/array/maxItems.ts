export function arrayMaxItems(maxLength: number): (array: unknown[]) => boolean;
export function arrayMaxItems(array: unknown[], maxLength: number): boolean;
export function arrayMaxItems(...args: [unknown[], number] | [number]): any {
	if (args.length === 1) {
		const [maxLength] = args;
		return (array: unknown[]) => arrayMaxItems(array, maxLength);
	}
	const [array, maxLength] = args;

	return array.length <= maxLength;
}
