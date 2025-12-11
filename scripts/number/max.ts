import { type AnyTuple } from "@scripts/common";

export function max<
	GenericInput extends AnyTuple<number>,
>(input: GenericInput) {
	return Math.max(...input);
}
