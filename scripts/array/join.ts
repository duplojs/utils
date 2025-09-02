export function join<
	GenericElement extends unknown,
>(
	separator: string,
): (array: GenericElement[]) => string;

export function join<
	GenericElement extends unknown,
>(): (array: GenericElement[]) => string;

export function join<
	GenericElement extends unknown,
>(
	array: GenericElement[],
	separator: string,
): string;

export function join<
	GenericElement extends unknown,
>(
	array: GenericElement[],
): string;

export function join(...args: [unknown[], string ] | [unknown[]] | [string] | []) {
	if (args.length === 0) {
		return (array: unknown[]) => join(array);
	}

	if (args.length === 1) {
		const [arrayOrSeparator] = args;

		if (Array.isArray(arrayOrSeparator)) {
			return arrayOrSeparator.join();
		}

		return (array: unknown[]) => join(array, arrayOrSeparator);
	}

	const [array, separator] = args;

	return array.join(separator);
}
