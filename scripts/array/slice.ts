export function slice<
	GenericElement extends unknown,
>(
	start?: number,
	end?: number,
): (array: readonly GenericElement[]) => GenericElement[];

export function slice<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	start?: number,
	end?: number,
): GenericElement[];

export function slice(...args: [readonly unknown[], number?, number?] | [number?, number?]) {
	if (!Array.isArray(args[0])) {
		const [start, end] = args as [number?, number?];
		return (array: unknown[]) => slice(array, start, end);
	}

	const [array, start, end] = args;

	return array.slice(start, end);
}
