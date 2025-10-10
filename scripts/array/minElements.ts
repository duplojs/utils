import { type CreateTuple } from "./types/createTuple";

export function minElements<
	GenericArray extends readonly unknown[],
	GenericLength extends number,
>(
	minLength: GenericLength,
): (array: GenericArray) =>
	// @ts-expect-error predicate error
	array is [
		...CreateTuple<GenericArray[number], GenericLength>,
		...GenericArray[number][],
	];

export function minElements<
	GenericArray extends readonly unknown[],
	GenericLength extends number,
>(
	array: GenericArray,
	minLength: GenericLength,
):
	// @ts-expect-error predicate error
	array is [
		...CreateTuple<GenericArray[number], GenericLength>,
		...GenericArray[number][],
	];

export function minElements(...args: [readonly unknown[], number] | [number]): any {
	if (args.length === 1) {
		const [minLength] = args;
		return (array: unknown[]) => minElements(array, minLength);
	}
	const [array, minLength] = args;

	return array.length >= minLength;
}
