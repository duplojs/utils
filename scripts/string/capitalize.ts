export function capitalize<
	GenericString extends string,
>(str: GenericString) {
	return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<GenericString>;
}
