/**
 * {@include string/trimEnd/index.md}
 */
export function trimEnd<
	GenericInput extends string,
>(input: GenericInput) {
	return input.trimEnd();
}
