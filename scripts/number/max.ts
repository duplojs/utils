import { type AnyTuple } from "@scripts/common";

/**
 * {@include number/max/index.md}
 */
export function max<
	GenericInput extends AnyTuple<number>,
>(input: GenericInput) {
	return Math.max(...input);
}
