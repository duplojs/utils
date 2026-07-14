export function stringTransformer(data: unknown) {
	try {
		return String(data);
	} catch {
		return data;
	}
}
