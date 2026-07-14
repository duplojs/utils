export function bigintTransformer(data: unknown) {
	try {
		return BigInt(data as never);
	} catch {
		return data;
	}
}
