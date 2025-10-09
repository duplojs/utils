import { type AnyTuple } from "@scripts/common";
import { type PopTuple } from "./types";

export function pop<
	const GenericArray extends readonly unknown[],
>(array: GenericArray): GenericArray extends AnyTuple
	? PopTuple<GenericArray>
	: GenericArray {
	return array.slice(0, -1) as never;
}
