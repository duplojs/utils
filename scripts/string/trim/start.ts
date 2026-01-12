/**
 * {@include string/trimStart/index.md}
 */
export function trimStart<
	GenericInput extends string,
>(input: GenericInput) {
	return input.trimStart();
}
