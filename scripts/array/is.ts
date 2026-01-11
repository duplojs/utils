/**
 * {@include array/is/index.md}
 */
export function is<
	GenericValue extends unknown,
>(
	arg: GenericValue,
): arg is GenericValue extends any[] ? GenericValue : never {
	return arg instanceof Array;
}
