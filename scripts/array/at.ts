export function at<
	GenericElement extends unknown,
>(
	index: number,
): (array: readonly GenericElement[]) => GenericElement | undefined;

export function at<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	index: number,
): GenericElement | undefined;

export function at(...args: [readonly unknown[], number] | [number]) {
	if (args.length === 1) {
		const [index] = args;
		return (array: unknown[]) => at(array, index);
	}

	const [array, index] = args;

	return array.at(index);
}
