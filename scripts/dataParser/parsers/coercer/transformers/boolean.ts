export function booleanTransformer(data: unknown) {
	if (typeof data === "string") {
		const lower = data.trim().toLowerCase();

		if (lower === "true" || lower === "false") {
			return lower === "true";
		}
	} else if (typeof data === "number" && (data === 0 || data === 1)) {
		return data === 1;
	}

	return data;
}

