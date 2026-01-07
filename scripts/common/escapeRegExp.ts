/**
 * {@include common/escapeRegExp/index.md}
 */
export function escapeRegExp<
	GenericInput extends string,
>(input: GenericInput) {
	return input.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
