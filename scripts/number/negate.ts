/**
 * {@include number/negate/index.md}
 */
export function negate<
	GenericValue extends number,
>(value: GenericValue): number {
	return -value;
}
