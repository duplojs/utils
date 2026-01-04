/**
 * {@include number/ceil/index.md}
 */
export function ceil<
	GenericValue extends number,
>(value: GenericValue): number {
	return Math.ceil(value);
}
