/**
 * {@include number/atan/index.md}
 */
export function atan<
	GenericValue extends number,
>(value: GenericValue): number {
	return Math.atan(value);
}
