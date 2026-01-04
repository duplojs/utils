/**
 * {@include number/asin/index.md}
 */
export function asin<
	GenericValue extends number,
>(value: GenericValue): number {
	return Math.asin(value);
}
