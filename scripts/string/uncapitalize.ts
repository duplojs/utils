export function uncapitalize<
	GenericString extends string,
>(input: GenericString) {
	return `${input.charAt(0).toLowerCase()}${input.slice(1)}` as Uncapitalize<GenericString>;
}
