export type IsNever<
	GenericValue extends unknown,
> = [GenericValue] extends [never]
	? true
	: false;
