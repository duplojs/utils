export type DeepRemoveReadonly<
	GenericValue extends unknown,
> = GenericValue extends object
	? {
		-readonly [Prop in keyof GenericValue]: DeepRemoveReadonly<GenericValue[Prop]>
	}
	: GenericValue;
