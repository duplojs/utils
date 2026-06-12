import { type OnlyLiteralNumber, type AnyTuple, type ComputedTypeError, type ForbiddenTupleWithUnknownLength } from "@scripts/common";
import { type MaxElements } from "./types";
import { type IsGreater } from "@scripts/number";

type CheckMaxLengthCast<
	GenericArray extends AnyTuple<unknown>,
	GenericLength extends number,
> = IsGreater<GenericLength, GenericArray["length"]> extends true
	? unknown
	: ComputedTypeError<`Casting is impossible with ${GenericLength} because is less than array length ${GenericArray["length"]}.`>;

/**
 * {@include array/withMaxElements/index.md}
 */
export function withMaxElements<
	GenericArray extends AnyTuple<unknown>,
	GenericLength extends number = GenericArray["length"],
>(
	array: (
		& GenericArray
		& ForbiddenTupleWithUnknownLength<GenericArray>
		& CheckMaxLengthCast<GenericArray, GenericLength>
	),
	length?: (
		& GenericLength
		& OnlyLiteralNumber<GenericLength>
	),
): GenericArray & MaxElements<GenericLength> {
	return array as never;
}
