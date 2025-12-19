export function capitalize<
	GenericString extends string,
>(input: GenericString) {
	return `${input.charAt(0).toUpperCase()}${input.slice(1)}` as Capitalize<GenericString>;
}
