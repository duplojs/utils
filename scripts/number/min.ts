import { type AnyTuple } from "@scripts/common";

/**
 * {@include number/min/index.md}
 */
export function min<
	GenericInput extends AnyTuple<number>,
>(input: GenericInput) {
	return Math.min(...input);
}
