export function templateLiteralTransformer(data: unknown) {
	if (
		typeof data === "number"
		|| typeof data === "bigint"
		|| typeof data === "boolean"
	) {
		return String(data);
	}

	return data;
}
