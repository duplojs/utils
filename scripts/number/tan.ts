/**
 * {@include number/tan/index.md}
 */
export function tan<
	GenericValue extends number,
>(value: GenericValue): number {
	return Math.tan(value);
}
