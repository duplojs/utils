import type { Shift } from "./types";

/**
 * {@include string/shift/index.md}
 */
export function shift<
	GenericInput extends string,
>(
	input: GenericInput,
): Shift<GenericInput> {
	return input.slice(1) as never;
}
