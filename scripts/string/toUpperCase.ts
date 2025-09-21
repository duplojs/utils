export function toUpperCase<
	GenericString extends string,
>(str: GenericString) {
	return str.toUpperCase() as Uppercase<GenericString>;
}

