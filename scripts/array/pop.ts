import { type AnyTuple, type PopTuple } from "@scripts/common";

export function pop<
	const GenericArray extends readonly unknown[],
>(array: GenericArray): GenericArray extends AnyTuple
	? PopTuple<GenericArray>
	: GenericArray {
	return array.slice(0, -1) as never;
}
