export type MaybePromise<
	GenericValue extends unknown,
> = GenericValue | Promise<GenericValue>;
