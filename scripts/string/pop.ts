import type { Pop } from "./types";

/**
 * {@include string/pop/index.md}
 */
export function pop<
	GenericInput extends string,
>(
	input: GenericInput,
): Pop<GenericInput> {
	return input.slice(0, -1) as never;
}
