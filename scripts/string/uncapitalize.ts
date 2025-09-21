export function uncapitalize<
	GenericString extends string,
>(str: GenericString) {
	return (str.charAt(0).toLowerCase() + str.slice(1)) as Uncapitalize<GenericString>;
}
