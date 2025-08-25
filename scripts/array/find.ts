import { type AnyFunction } from "@scripts/common/types/anyFunction";

export function arrayFind<
	GenericItem extends unknown,
	GenericOutput extends GenericItem,
>(
	predicate: (item: GenericItem, index: number) => item is GenericOutput,
): (array: GenericItem[]) => GenericOutput | undefined;
export function arrayFind<
	GenericItem extends unknown,
	GenericOutput extends GenericItem,
>(
	array: GenericItem[],
	predicate: (item: GenericItem, index: number) => item is GenericOutput,
): GenericOutput | undefined;
export function arrayFind(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => arrayFind(array, predicate as never);
	}
	const [array, predicate] = args;

	for (let index = 0; index < array.length; index++) {
		const item = array[index]!;

		if (predicate(item, index)) {
			return item;
		}
	}

	return undefined;
}
