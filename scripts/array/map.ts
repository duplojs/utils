import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayMapParams {
	index: number;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the array structure and avoids this inference bug.
export function map<
	GenericArray extends readonly unknown[],
	GenericOutput extends unknown,
>(
	theFunction: (element: GenericArray[number], params: ArrayMapParams) => GenericOutput,
): (array: GenericArray) => GenericOutput[];

export function map<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	array: readonly GenericElement[],
	theFunction: (element: GenericElement, params: ArrayMapParams) => GenericOutput,
): GenericOutput[];

export function map(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (array: unknown[]) => map(array, theFunction);
	}
	const [array, theFunction] = args;

	return array.map((element, index) => theFunction(element, { index }));
}
