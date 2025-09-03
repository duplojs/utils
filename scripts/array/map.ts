import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayMapParams {
	index: number;
}

export function map<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	theFunction: (item: GenericElement, params: ArrayMapParams) => GenericOutput,
): (array: readonly GenericElement[]) => GenericOutput[];
export function map<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	array: readonly GenericElement[],
	theFunction: (item: GenericElement, params: ArrayMapParams) => GenericOutput,
): GenericOutput[];
export function map(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (array: unknown[]) => map(array, theFunction);
	}
	const [array, theFunction] = args;

	return array.map((item, index) => theFunction(item, { index }));
}
