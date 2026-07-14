export function numberTransformer(data: unknown) {
	try {
		return Number(data);
	} catch {
		return data;
	}
}
