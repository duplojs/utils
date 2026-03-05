import { type RemoveFromUnion } from "@scripts/common";
import { type MapTuple } from "./types";

type EligibleValue = string | null | undefined | boolean | number | bigint | symbol;

type TooLargeType = string | number | boolean | bigint | symbol;

/**
 * {@include array/notIncludes/index.md}
 */
export function notIncludes<
	GenericArray extends readonly unknown[],
	const GenericNotIncludeValue extends RemoveFromUnion<
		Extract<GenericArray[number], EligibleValue>,
		TooLargeType
	>,
>(
	value: GenericNotIncludeValue,
): (input: GenericArray) =>
	// @ts-expect-error predicate error
	input is MapTuple<
		GenericArray,
		Exclude<GenericArray[number], GenericNotIncludeValue>
	>;

export function notIncludes<
	GenericArray extends readonly unknown[],
>(
	value: NoInfer<GenericArray[number]>
): (input: GenericArray) => boolean;

export function notIncludes<
	GenericArray extends readonly unknown[],
	const GenericNotIncludeValue extends RemoveFromUnion<
		Extract<GenericArray[number], EligibleValue>,
		TooLargeType
	>,
>(
	input: GenericArray,
	value: GenericNotIncludeValue,
):
	// @ts-expect-error predicate error
	input is MapTuple<
		GenericArray,
		Exclude<GenericArray[number], GenericNotIncludeValue>
	>;

export function notIncludes<
	GenericArray extends readonly unknown[],

>(
	input: GenericArray,
	value: NoInfer<GenericArray[number]>,
): boolean;

export function notIncludes(...args: [readonly unknown[], EligibleValue] | [EligibleValue]) {
	if (args.length === 1) {
		const [value] = args;

		return (array: unknown[]) => notIncludes(array, value as never);
	}

	const [array, value] = args;

	return !array.includes(value);
}
