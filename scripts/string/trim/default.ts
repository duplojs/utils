/**
 * {@include string/trim/index.md}
 */
export function trim<
	GenericInput extends string,
>(input: GenericInput) {
	return input.trim();
}
