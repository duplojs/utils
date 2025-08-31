import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayFindParams {
	index: number;
}

export function arrayFind<
	GenericItem extends unknown,
	GenericOutput extends GenericItem,
>(
	predicate: (item: GenericItem, params: ArrayFindParams) => item is GenericOutput,
): (array: GenericItem[]) => GenericOutput | undefined;
export function arrayFind<
	GenericItem extends unknown,
	GenericOutput extends GenericItem,
>(
	array: GenericItem[],
	predicate: (item: GenericItem, params: ArrayFindParams) => item is GenericOutput,
): GenericOutput | undefined;
export function arrayFind(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => arrayFind(array, predicate as never);
	}
	const [array, predicate] = args;

	return array.find((item, index) => predicate(item, { index }));
}
