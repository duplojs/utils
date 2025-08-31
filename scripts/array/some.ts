import { type AnyFunction } from "@scripts/common";

export function arraySome<GenericItem extends unknown>(
	predicate: (
		item: GenericItem,
		index: number,
		array: GenericItem[]
	) => boolean,
): (array: GenericItem[]) => boolean;
export function arraySome<GenericItem extends unknown>(
	array: GenericItem[],
	predicate: (
		item: GenericItem,
		index: number,
		array: GenericItem[]
	) => boolean,
): boolean;
export function arraySome(...args: [AnyFunction] | [unknown[], AnyFunction]) {
	if (args.length === 1) {
		const [predicate] = args;
		return (array: unknown[]) => arraySome(array, predicate as never);
	}

	const [array, predicate] = args;

	for (let index = 0; index < array.length; index++) {
		const item = array[index];
		if (predicate(item, index, array)) {
			return true;
		}
	}
	return false;
}
