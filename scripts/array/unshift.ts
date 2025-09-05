export function unshift<
	GenericElement extends unknown,
>(
	element: NoInfer<GenericElement>
): (array: readonly GenericElement[]) => GenericElement[];

export function unshift<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	element: NoInfer<GenericElement>,
	...elements: NoInfer<GenericElement>[]
): GenericElement[];

export function unshift(...args: [readonly unknown[], unknown, ...unknown[]] | [unknown]) {
	if (args.length === 1) {
		const [element] = args as [unknown];

		return (array: unknown[]) => unshift(array, element);
	}

	const [array, ...elements] = args as [unknown[], unknown, ...unknown[]];

	return [...elements, ...array];
}
