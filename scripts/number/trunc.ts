/**
 * {@include number/trunc/index.md}
 */
export function trunc<
	GenericValue extends number,
>(value: GenericValue): number {
	return Math.trunc(value);
}
