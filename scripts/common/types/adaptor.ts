export type Adaptor<
	GenericValue extends unknown,
	GenericExpectedType extends unknown,
> = GenericValue extends GenericExpectedType
	? GenericValue
	: never;
