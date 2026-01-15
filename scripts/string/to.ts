type Primitive = (
	| string
	| boolean
	| null
	| number
	| undefined
	| bigint
);

/**
 * {@include string/to/index.md}
 */
export function to<
	GenericValue extends Primitive,
>(value: GenericValue): `${GenericValue}` {
	return `${value}`;
}
