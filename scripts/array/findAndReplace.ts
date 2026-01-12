import { type AnyValue, type AnyFunction } from "@scripts/common";

interface ArrayFindAndSetIndexParams {
	index: number;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the array structure and avoids this inference bug.
/**
 * {@include array/findAndReplace/index.md}
 */
export function findAndReplace<
	GenericArray extends readonly unknown[],
	GenericValue extends AnyValue,
>(
	predicate: (element: GenericArray[number], params: ArrayFindAndSetIndexParams) => boolean,
	value: GenericValue,
): (input: GenericArray) => (GenericArray[number] | GenericValue)[] | undefined;

export function findAndReplace<
	GenericArray extends readonly unknown[],
	GenericValue extends AnyValue,
>(
	input: GenericArray,
	predicate: (element: GenericArray[number], params: ArrayFindAndSetIndexParams) => boolean,
	value: GenericValue,
): (GenericArray[number] | GenericValue)[] | undefined;

export function findAndReplace(...args: [readonly unknown[], AnyFunction, AnyValue] | [AnyFunction, AnyValue]): any {
	if (args.length === 2) {
		const [predicate, value] = args;
		return (input: unknown[]) => findAndReplace(input, predicate as never, value);
	}

	const [input, predicate, value] = args;

	for (let index = 0; index < input.length; index++) {
		if (predicate(input[index], { index })) {
			const newArray = [...input];
			newArray[index] = value;
			return newArray;
		}
	}

	return undefined;
}
