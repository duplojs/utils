export function arrayPush<GenericElement extends unknown>(
	element: GenericElement
): <GenericArrayType extends GenericElement>(
	array: GenericArrayType[]
) => GenericElement[];

export function arrayPush<
	GenericArrayElement extends unknown,
>(
	array: GenericArrayElement[],
	...items: GenericArrayElement[]
): GenericArrayElement[];

export function arrayPush<
	GenericElement extends unknown,
>(
	arrayOrElement: GenericElement[] | GenericElement,
	...items: GenericElement[]
):
	| GenericElement[]
	| (
		<GenericArrayType extends GenericElement>(array: GenericArrayType[]) => GenericElement[]
	) {
	if (Array.isArray(arrayOrElement)) {
		return [...arrayOrElement, ...items];
	}

	return <GenericArrayType extends GenericElement>(
		array: GenericArrayType[],
	) => [...array, arrayOrElement];
}
