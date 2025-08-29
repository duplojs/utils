export function arrayFlat<const Depth extends number>(
	depth: Depth
): <const GenericArray extends readonly unknown[]>(
	array: GenericArray
) => FlatArray<GenericArray, Depth>[];

export function arrayFlat<const GenericArray extends readonly unknown[], const Depth extends number = 1>(
	array: GenericArray,
	depth?: Depth
): FlatArray<GenericArray, Depth>[];

export function arrayFlat<
	const GenericArray extends readonly unknown[],
	const Depth extends number = 1,
>(
	arrayOrDepth: GenericArray | Depth,
	depth = 1 as Depth,
):
	| FlatArray<GenericArray, Depth>[]
	| (<const InputArray extends readonly unknown[]>(array: InputArray) => FlatArray<InputArray, Depth>[]
) {
	function flattenArray<GenericArrayElement>(
		array: readonly GenericArrayElement[],
		currentDepth: number,
	): GenericArrayElement[] {
		let result: GenericArrayElement[] = [];

		for (const item of array) {
			if (Array.isArray(item) && currentDepth > 0) {
				const flattened = flattenArray(item as readonly GenericArrayElement[], currentDepth - 1);
				result = [...result, ...flattened];
			} else {
				result = [...result, item];
			}
		}

		return result;
	}

	if (Array.isArray(arrayOrDepth)) {
		return flattenArray(arrayOrDepth, depth);
	}

	return <const InputArray extends readonly unknown[]>(
		array: InputArray,
	) => flattenArray(array, arrayOrDepth as Depth) as FlatArray<InputArray, Depth>[];
}
