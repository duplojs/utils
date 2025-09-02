export function reverse<
	GenericElement extends unknown,
>(): (array: GenericElement[]) => GenericElement[];

export function reverse<
	GenericElement extends unknown,
>(array: GenericElement[]): GenericElement[];

export function reverse(...args: [unknown[]] | [undefined] | []) {
	if (args.length === 0 || args[0] === undefined) {
		return (array: unknown[]) => reverse(array);
	}

	const [array] = args;

	return [...array].reverse();
}
