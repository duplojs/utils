import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayMapParams {
	index: number;
}

export function arrayMap<
	GenericItem extends unknown,
	GenericOutput extends unknown,
>(
	theFunction: (item: GenericItem, params: ArrayMapParams) => GenericOutput,
): (array: GenericItem[]) => GenericOutput[];
export function arrayMap<
	GenericItem extends unknown,
	GenericOutput extends unknown,
>(
	array: GenericItem[],
	theFunction: (item: GenericItem, params: ArrayMapParams) => GenericOutput,
): GenericOutput[];
export function arrayMap(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (array: unknown[]) => arrayMap(array, theFunction);
	}
	const [array, theFunction] = args;

	return array.map((item, index) => theFunction(item, { index }));
}
