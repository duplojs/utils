/**
 * {@include number/cos/index.md}
 */
export function cos<
	GenericValue extends number,
>(value: GenericValue): number {
	return Math.cos(value);
}
