export function emptyTransformer(data: unknown) {
	return data === "undefined"
		? undefined
		: data;
}
