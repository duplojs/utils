import { type AnyTuple } from "@scripts/common";

export function first<
	GenericArray extends readonly unknown[],
>(
	array: GenericArray,
): GenericArray extends AnyTuple
		? GenericArray[0]
		: GenericArray[number] | undefined {
	return array[0] as never;
}
