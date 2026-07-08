export function nilTransformer(data: unknown) {
	return data === "null"
		? null
		: data;
}
