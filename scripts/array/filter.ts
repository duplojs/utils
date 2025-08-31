import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayFilterParams {
	index: number;
}

export function arrayFilter<
	GenericItem extends unknown,
	GenericOutput extends GenericItem,
>(
	predicate: (item: GenericItem, params: ArrayFilterParams) => item is GenericOutput,
): (array: GenericItem[]) => GenericOutput[];
export function arrayFilter<
	GenericItem extends unknown,
	GenericOutput extends GenericItem,
>(
	array: GenericItem[],
	predicate: (item: GenericItem, params: ArrayFilterParams) => item is GenericOutput,
): GenericOutput[];
export function arrayFilter(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => arrayFilter(array, predicate as never);
	}

	const [array, predicate] = args;

	return array.filter((item, index) => predicate(item, { index }));
}
