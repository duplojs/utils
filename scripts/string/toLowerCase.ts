/**
 * {@include string/toLowerCase/index.md}
 */
export function toLowerCase<
	GenericString extends string,
>(input: GenericString) {
	return input.toLowerCase() as Lowercase<GenericString>;
}
