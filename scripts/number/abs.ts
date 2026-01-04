/**
 * {@include number/abs/index.md}
 */
export function abs<
	GenericValue extends number,
>(value: GenericValue): number {
	return Math.abs(value);
}
