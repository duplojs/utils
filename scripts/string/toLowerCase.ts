export function toLowerCase<
	GenericString extends string,
>(input: GenericString) {
	return input.toLowerCase() as Lowercase<GenericString>;
}
