export function concat<
	GenericFirstArray extends readonly unknown[],
	GenericSecondArray extends readonly unknown[],
>(
	elements: GenericSecondArray,
): (array: GenericFirstArray) => (GenericFirstArray[number] | GenericSecondArray[number])[];

export function concat<
	GenericFirstArray extends readonly unknown[],
	GenericSecondArray extends readonly unknown[],
	GenericRest extends readonly unknown[][],
>(
	array: GenericFirstArray,
	elements: GenericSecondArray,
	...elementsRest: GenericRest
): (GenericFirstArray[number] | GenericSecondArray[number] | GenericRest[number][number])[];

export function concat(...args: [readonly unknown[], readonly unknown[], ...unknown[]] | [readonly unknown[]]) {
	if (args.length === 1) {
		const [elements] = args;
		return (array: unknown[]) => concat(array, elements);
	}

	const [array, elements, ...elementsRest] = args;

	return array.concat(elements, ...elementsRest);
}
