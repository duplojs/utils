export function push<
	GenericElement extends unknown,
>(
	item: NoInfer<GenericElement>
): (array: readonly GenericElement[]) => GenericElement[];
export function push<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	item: NoInfer<GenericElement>,
	...items: NoInfer<GenericElement>[]
): GenericElement[];
export function push(...args: [readonly unknown[], unknown, ...unknown[]] | [unknown]) {
	if (args.length === 1) {
		const [item] = args as [unknown];

		return (array: unknown[]) => push(array, item);
	}

	const [array, ...items] = args as [unknown[], unknown, ...unknown[]];

	return [...array, ...items];
}
