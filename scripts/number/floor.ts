/**
 * {@include number/floor/index.md}
 */
export function floor<
	GenericValue extends number,
>(value: GenericValue): number {
	return Math.floor(value);
}
