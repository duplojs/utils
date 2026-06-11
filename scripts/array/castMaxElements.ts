import { type ComputedTypeError, type IsEqual } from "@scripts/common";
import { type MaxElements } from "./types";
import { type IsGreater } from "@scripts/number";

type CheckMaxLengthCast<
	GenericArray extends readonly unknown[] & MaxElements<number>,
	GenericLength extends number,
> = IsEqual<GenericLength, number> extends true
	? ComputedTypeError<"Can not cast on non literal length.">
	: GenericArray extends MaxElements<infer InferredMaxLength>
		? InferredMaxLength extends number
			? IsEqual<GenericLength, InferredMaxLength> extends true
				? unknown
				: IsGreater<GenericLength, InferredMaxLength> extends true
					? unknown
					: ComputedTypeError<`Casting is impossible with ${GenericLength} because is less than ${InferredMaxLength}.`>
			: never
		: never;

/**
 * {@include array/castMaxElements/index.md}
 */
export function castMaxElements<
	GenericArray extends readonly unknown[] & MaxElements<number>,
	GenericLength extends number,
>(
	maxLength: GenericLength & CheckMaxLengthCast<GenericArray, GenericLength>
): (array: GenericArray) => GenericArray & MaxElements<GenericLength>;

export function castMaxElements<
	GenericArray extends readonly unknown[] & MaxElements<number>,
	GenericLength extends number,
>(
	array: GenericArray,
	maxLength: GenericLength & CheckMaxLengthCast<GenericArray, GenericLength>
): GenericArray & MaxElements<GenericLength>;

export function castMaxElements(...args: [readonly unknown[], number] | [number]): any {
	if (args.length === 1) {
		const [maxLength] = args;
		return (array: readonly unknown[]) => castMaxElements(array as never, maxLength as never);
	}
	const [array] = args;

	return array;
}
