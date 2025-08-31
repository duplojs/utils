
export function includes<
	GenericArrayValue extends unknown,
>(
	value: GenericArrayValue,
): (array: GenericArrayValue[]) => boolean;
export function includes<
	GenericArrayValue extends unknown,
>(
	array: GenericArrayValue[],
	value: GenericArrayValue,
): boolean;
export function includes(...args: [unknown[], unknown] | [unknown]) {
	if (args.length === 1) {
		const [value] = args;

		return (array: unknown[]) => includes(array, value);
	}

	const [array, value] = args;

	return array.includes(value);
}

