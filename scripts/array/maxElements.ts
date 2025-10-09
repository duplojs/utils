export function maxElements<
	GenericArray extends readonly unknown[],
>(maxLength: number): (array: GenericArray) => boolean;
export function maxElements<
	GenericArray extends readonly unknown[],
>(array: GenericArray, maxLength: number): boolean;
export function maxElements(...args: [readonly unknown[], number] | [number]): any {
	if (args.length === 1) {
		const [maxLength] = args;
		return (array: unknown[]) => maxElements(array, maxLength);
	}
	const [array, maxLength] = args;

	return array.length <= maxLength;
}
