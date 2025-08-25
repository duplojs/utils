import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface ArrayMapFunctionParams<
	GenericItem extends unknown = unknown,
> {
	item: GenericItem;
	index: number;
}

export function arrayMap<
	GenericItem extends unknown,
	GenericOutput extends unknown,
>(
	theFunction: (params: ArrayMapFunctionParams<GenericItem>) => GenericOutput,
): (array: GenericItem[]) => GenericOutput[];
export function arrayMap<
	GenericItem extends unknown,
	GenericOutput extends unknown,
>(
	array: GenericItem[],
	theFunction: (params: ArrayMapFunctionParams<GenericItem>) => GenericOutput,
): GenericOutput[];
export function arrayMap(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (array: unknown[]) => arrayMap(array, theFunction);
	}
	const [array, theFunction] = args;

	const newArray = [];

	for (let index = 0; index < array.length; index++) {
		const item = array[index]!;

		newArray.push(
			theFunction({
				index,
				item,
			}),
		);
	}

	return newArray;
}
