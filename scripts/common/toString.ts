export function toString<
	GenericValue extends number | string | bigint | boolean | null | undefined,
>(value: GenericValue): `${GenericValue}` {
	return `${value}`;
}
