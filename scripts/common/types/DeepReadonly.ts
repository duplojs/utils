export type DeepReadonly<
	GenericValue extends unknown,
> = GenericValue extends object
	? {
		readonly [Prop in keyof GenericValue]: DeepReadonly<GenericValue[Prop]>
	}
	: GenericValue;
