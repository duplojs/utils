export function flat(): <
	const GenericArray extends readonly unknown[],
>(
	array: GenericArray,
) => FlatArray<GenericArray, 1>[];

export function flat<
	const Depth extends number,
>(
	depth: Depth
): <const GenericArray extends readonly unknown[]>(
	array: GenericArray
) => FlatArray<GenericArray, Depth>[];

export function flat<
	const GenericArray extends readonly unknown[],
	const Depth extends number,
>(
	array: GenericArray,
	depth: Depth
): FlatArray<GenericArray, Depth>[];

export function flat<
	const GenericArray extends readonly unknown[],
>(
	array: GenericArray,
): FlatArray<GenericArray, 1>[];

export function flat(...args: [unknown[], number] | [unknown[]] | [number] | []): any {
	if (args.length === 0) {
		return (array: unknown[]) => flat(array);
	}

	if (args.length === 1) {
		const [depthOrArray] = args;

		if (Array.isArray(depthOrArray)) {
			return depthOrArray.flat(1);
		}

		const depth = depthOrArray;
		return (array: unknown[]) => flat(array, depth);
	}

	const [array, depth] = args;

	return array.flat(depth);
}
