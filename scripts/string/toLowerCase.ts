export function toLowerCase<
	GenericString extends string,
>(str: GenericString) {
	return str.toLowerCase() as Lowercase<GenericString>;
}
