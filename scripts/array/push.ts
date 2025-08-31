export function arrayPush<GenericElement extends unknown>(
	...elements: GenericElement[]
): (array: GenericElement[]) => GenericElement[];

export function arrayPush<GenericElement extends unknown>(
	array: GenericElement[],
	...elements: GenericElement[]
): GenericElement[];

export function arrayPush(...args: unknown[]) {
	const [first, ...rest] = args;

	if (Array.isArray(first)) {
		return [...first, ...rest];
	} else {
		return (array: unknown[]) => [...array, ...args];
	}
}
