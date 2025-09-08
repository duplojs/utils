export type AnyTuple<
	GenericValue extends unknown = any,
> = readonly [GenericValue, ...GenericValue[]];
