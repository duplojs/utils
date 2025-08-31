export function push<
	GenericElement extends unknown,
>(
	item: GenericElement
): (array: GenericElement[]) => GenericElement[];
export function push<
	GenericElement extends unknown,
>(
	array: GenericElement[],
	item: GenericElement,
	...items: GenericElement[]
): GenericElement[];
export function push(...args: [unknown[], unknown, ...unknown[]] | [unknown]) {
	if (args.length === 1) {
		const [item] = args as [unknown];

		return (array: unknown[]) => push(array, item);
	}

	const [array, ...items] = args as [unknown[], unknown, ...unknown[]];

	return [...array, ...items];
}
