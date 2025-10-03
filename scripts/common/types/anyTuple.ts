export type AnyTuple<
	GenericValue extends unknown = any,
> = (
	| readonly [GenericValue, ...GenericValue[]]
	| readonly [...GenericValue[], GenericValue]
);
