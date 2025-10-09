import { type AnyFunction } from "@scripts/common";

interface ArrayFindLastParams {
	index: number;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the input structure and avoids this inference bug.
export function findLast<
	GenericArray extends readonly unknown[],
	GenericOutput extends GenericArray[number],
>(
	predicate: (element: GenericArray[number], params: ArrayFindLastParams) => element is GenericOutput,
): (input: GenericArray) => GenericOutput | undefined;

export function findLast<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	input: readonly GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindLastParams) => element is GenericOutput,
): GenericOutput | undefined;

export function findLast<
	GenericArray extends readonly unknown[],
>(
	predicate: (element: GenericArray[number], params: ArrayFindLastParams) => boolean,
): (input: GenericArray) => GenericArray[number] | undefined;

export function findLast<
	GenericElement extends unknown,
>(
	input: readonly GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindLastParams) => boolean,
): GenericElement | undefined;

export function findLast(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;
		return (input: unknown[]) => findLast(input, predicate as never);
	}

	const [input, predicate] = args;

	for (let index = input.length - 1; index >= 0; index--) {
		const item = input[index]!;

		if (predicate(item, { index })) {
			return item;
		}
	}

	return undefined;
}
