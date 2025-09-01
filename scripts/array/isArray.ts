export function isArray<
	GenericType extends unknown,
>(): (arg: GenericType) => arg is GenericType & GenericType[];

export function isArray<
	GenericType extends unknown,
>(
	arg: GenericType
): arg is GenericType & GenericType[];

export function isArray(arg?: unknown) {
	if (arguments.length === 0) {
		return (value: unknown) => isArray(value);
	}

	return Array.isArray(arg);
}
