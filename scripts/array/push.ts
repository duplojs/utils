/**
 * {@include array/push/index.md}
 */
export function push<
	GenericElement extends unknown,
>(
	item: NoInfer<GenericElement>
): (input: readonly GenericElement[]) => GenericElement[];

export function push<
	GenericElement extends unknown,
>(
	input: readonly GenericElement[],
	item: NoInfer<GenericElement>,
	...items: NoInfer<GenericElement>[]
): GenericElement[];

export function push(...args: [readonly unknown[], unknown, ...unknown[]] | [unknown]) {
	if (args.length === 1) {
		const [item] = args;

		return (input: unknown[]) => push(input, item);
	}

	const [input, ...items] = args as [unknown[], unknown, ...unknown[]];

	return [...input, ...items];
}
