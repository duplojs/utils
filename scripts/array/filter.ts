import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayFilterParams {
	index: number;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the array structure and avoids this inference bug.
export function filter<
	GenericArray extends readonly unknown[],
	GenericOutput extends GenericArray[number],
>(
	predicate: (item: GenericArray[number], params: ArrayFilterParams) => item is GenericOutput,
): (array: GenericArray) => GenericOutput[];
export function filter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	array: readonly GenericElement[],
	predicate: (item: GenericElement, params: ArrayFilterParams) => item is GenericOutput,
): GenericOutput[];
export function filter<
	GenericArray extends readonly unknown[],
>(
	predicate: (item: GenericArray[number], params: ArrayFilterParams) => boolean,
): (array: GenericArray) => GenericArray[number][];
export function filter<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	predicate: (item: GenericElement, params: ArrayFilterParams) => boolean,
): GenericElement[];
export function filter(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => filter(array, predicate as never);
	}

	const [array, predicate] = args;

	return array.filter((item, index) => predicate(item, { index }));
}
