export function toString<
	GenericArray extends unknown[],
>(): (array: GenericArray) => string;

export function toString<
	GenericArray extends unknown[],
>(
	array: GenericArray,
): string;

export function toString(arg?: unknown[]) {
	if (arguments.length === 0) {
		return (array: unknown[]) => toString(array);
	}

	return arg!.toString();
}
