/**
 * {@include array/set/index.md}
 */
export function set<
	GenericValue extends unknown,
>(
	index: number,
	value: GenericValue,
): (array: readonly GenericValue[]) => GenericValue[];

export function set<
	GenericValue extends unknown,
>(
	array: readonly GenericValue[],
	index: number,
	value: GenericValue,
): GenericValue[];

export function set(...args: [readonly unknown[], number, unknown] | [number, unknown]) {
	if (args.length === 2) {
		const [index, value] = args;
		return (array: unknown[]) => set(array, index, value);
	}

	const [array, index, value] = args;

	const length = array.length;
	const modIndex = ((index % length) + length) % length;

	return array.with(modIndex, value);
}
