import { type AnyFunction } from "@scripts/common/types/anyFunction";

export function arrayFilter<
	GenericItem extends unknown,
	GenericOutput extends GenericItem,
>(
	predicate: (item: GenericItem, index: number) => item is GenericOutput,
): (array: GenericItem[]) => GenericOutput[];
export function arrayFilter<
	GenericItem extends unknown,
	GenericOutput extends GenericItem,
>(
	array: GenericItem[],
	predicate: (item: GenericItem, index: number) => item is GenericOutput,
): GenericOutput[];
export function arrayFilter(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => arrayFilter(array, predicate as never);
	}

	const [array, predicate] = args;

	const newArray = [];

	for (let index = 0; index < array.length; index++) {
		const item = array[index]!;

		if (predicate(item, index)) {
			newArray.push(item);
		}
	}

	return newArray;
}
