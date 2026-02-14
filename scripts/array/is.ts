/**
 * {@include array/is/index.md}
 */
export function is<
	GenericValue extends unknown,
>(
	arg: GenericValue,
): arg is Extract<GenericValue, readonly any[]> {
	return arg instanceof Array;
}
