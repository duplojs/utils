
export function includes<
	GenericArrayValue extends unknown,
>(
	value: NoInfer<GenericArrayValue>,
): (array: readonly GenericArrayValue[]) => boolean;

export function includes<
	GenericArrayValue extends unknown,
>(
	array: readonly GenericArrayValue[],
	value: NoInfer<GenericArrayValue>,
): boolean;

export function includes(...args: [readonly unknown[], unknown] | [unknown]) {
	if (args.length === 1) {
		const [value] = args;

		return (array: unknown[]) => includes(array, value);
	}

	const [array, value] = args;

	return array.includes(value);
}

