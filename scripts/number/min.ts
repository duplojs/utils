import { type AnyTuple } from "@scripts/common";

export function min<
	GenericInput extends AnyTuple<number>,
>(input: GenericInput) {
	return Math.min(...input);
}
