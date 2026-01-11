/**
 * {@include string/toUpperCase/index.md}
 */
export function toUpperCase<
	GenericString extends string,
>(input: GenericString) {
	return input.toUpperCase() as Uppercase<GenericString>;
}
