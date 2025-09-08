import { type AnyTuple } from "@scripts/common";
import { type ShiftTuple } from "@scripts/array/types/shiftTuple";

export function shift<
	const GenericArray extends readonly unknown[],
>(array: GenericArray): GenericArray extends AnyTuple
	? ShiftTuple<GenericArray>
	: GenericArray {
	return array.slice(1) as never;
}
