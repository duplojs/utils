import { type AnyFunction } from "@scripts/common";

export function arraySome<GenericItem>(
	theFunction: (
		item: GenericItem,
		index: number,
		array: GenericItem[]
	) => boolean,
): (array: GenericItem[]) => boolean;
export function arraySome<GenericItem>(
	array: GenericItem[],
	theFunction: (
		item: GenericItem,
		index: number,
		array: GenericItem[]
	) => boolean,
): boolean;
export function arraySome(...args: [AnyFunction] | [unknown[], AnyFunction]) {
	if (args.length === 1) {
		const [theFunction] = args;
		return (array: unknown[]) => arraySome(array, theFunction);
	}

	const [array, theFunction] = args;

	for (let index = 0; index < array.length; index++) {
		const item = array[index];
		if (theFunction(item, index, array)) {
			return true;
		}
	}
	return false;
}
