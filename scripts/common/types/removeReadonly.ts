export type RemoveReadonly<
	GenericValue extends unknown,
> = GenericValue extends object
	? {
		-readonly [Prop in keyof GenericValue]: GenericValue[Prop]
	}
	: GenericValue;
