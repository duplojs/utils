export function reverse<
	GenericElement extends unknown,
>(): (array: readonly GenericElement[]) => GenericElement[];

export function reverse<
	GenericElement extends unknown,
>(array: readonly GenericElement[]): GenericElement[];

export function reverse(...args: [readonly unknown[]] | [undefined] | []) {
	if (args.length === 0 || args[0] === undefined) {
		return (array: unknown[]) => reverse(array);
	}

	const [array] = args;

	return [...array].reverse();
}
