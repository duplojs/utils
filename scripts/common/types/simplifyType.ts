export type SimplifyType<GenericValue extends unknown> =
	GenericValue extends Record<number, unknown>
		? { [Prop in keyof GenericValue]: SimplifyType<GenericValue[Prop]> }
		: GenericValue;
