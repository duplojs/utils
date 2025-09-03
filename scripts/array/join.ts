export function join<
	GenericElement extends unknown,
>(
	separator: string,
): (array: readonly GenericElement[]) => string;

export function join<
	GenericElement extends unknown,
>(): (array: readonly GenericElement[]) => string;

export function join<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	separator: string,
): string;

export function join<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
): string;

export function join(...args: [readonly unknown[], string] | [readonly unknown[]] | [string] | []) {
	if (args.length === 0) {
		return (array: unknown[]) => join(array);
	}

	if (args.length === 1) {
		const [arrayOrSeparator] = args;

		if (arrayOrSeparator instanceof Array) {
			return arrayOrSeparator.join();
		}

		return (array: readonly unknown[]) => join(array, arrayOrSeparator);
	}

	const [array, separator] = args;

	return array.join(separator);
}
