/**
 * {@include number/sqrt/index.md}
 */
export function sqrt<
	GenericValue extends number,
>(value: GenericValue): number {
	return Math.sqrt(value);
}
