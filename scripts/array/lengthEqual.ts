import { type CreateTuple } from "./types";

export function lengthEqual<
	GenericArray extends readonly unknown[],
	GenericLength extends number,
>(
	length: GenericLength,
): (array: GenericArray) =>
	// @ts-expect-error predicate error
	array is CreateTuple<GenericArray[number], GenericLength>;

export function lengthEqual<
	GenericArray extends readonly unknown[],
	GenericLength extends number,
>(
	array: GenericArray,
	length: GenericLength,
):
	// @ts-expect-error predicate error
	array is CreateTuple<GenericArray[number], GenericLength>;

export function lengthEqual(...args: [readonly unknown[], number] | [number]): any {
	if (args.length === 1) {
		const [minLength] = args;
		return (array: unknown[]) => lengthEqual(array, minLength);
	}
	const [array, minLength] = args;

	return array.length === minLength;
}
