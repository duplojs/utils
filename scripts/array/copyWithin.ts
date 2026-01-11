/**
 * {@include array/copyWithin/index.md}
 */
export function copyWithin<
	GenericElement extends unknown,
>(
	target: number,
	start: number,
	end?: number,
): (array: readonly GenericElement[]) => GenericElement[];

export function copyWithin<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	target: number,
	start: number,
	end?: number,
): GenericElement[];

export function copyWithin(...args: [readonly unknown[], number, number, number?] | [number, number, number?]) {
	if (!Array.isArray(args[0])) {
		const [target, start, end] = args as [number, number, number?];
		return (array: readonly unknown[]) => copyWithin(array, target, start, end);
	}

	const [array, target, start, end] = args as [unknown[], number, number, number?];

	return [...array].copyWithin(target, start, end);
}
