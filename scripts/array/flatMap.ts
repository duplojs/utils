import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayMapParams {
	index: number;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the array structure and avoids this inference bug.
export function flatMap<
	GenericArray extends readonly unknown[],
	GenericOutput extends unknown,
>(
	theFunction: (element: GenericArray[number], params: ArrayMapParams) => GenericOutput,
): (array: GenericArray) => FlatArray<GenericOutput, 1>[];

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
