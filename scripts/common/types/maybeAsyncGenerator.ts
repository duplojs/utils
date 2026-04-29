export type MaybeAsyncGenerator<
	GenericIterateValue extends unknown = unknown,
	GenericReturnValue extends unknown = unknown,
	GenericNext extends unknown = unknown,
> = (
	| Generator<
		GenericIterateValue,
		GenericReturnValue,
		GenericNext
	>
	| AsyncGenerator<
		GenericIterateValue,
		GenericReturnValue,
		GenericNext
	>
);
