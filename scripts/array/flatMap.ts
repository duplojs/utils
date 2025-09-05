import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayMapParams {
	index: number;
}

export function flatMap<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	theFunction: (element: GenericElement, params: ArrayMapParams) => GenericOutput,
): (array: readonly GenericElement[]) => FlatArray<GenericOutput, 1>[];

export function flatMap<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	array: readonly GenericElement[],
	theFunction: (element: GenericElement, params: ArrayMapParams) => GenericOutput,
): FlatArray<GenericOutput, 1>[];

export function flatMap(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (array: unknown[]) => flatMap(array, theFunction);
	}
	const [array, theFunction] = args;

	return array.flatMap((element, index) => theFunction(element, { index }));
}
