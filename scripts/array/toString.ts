export function toString(): (array: readonly unknown[]) => string;

export function toString(
	array: readonly unknown[],
): string;

export function toString(arg?: readonly unknown[]) {
	if (arguments.length === 0) {
		return (array: unknown[]) => toString(array);
	}

	return arg!.toString();
}
