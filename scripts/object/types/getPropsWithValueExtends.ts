export type GetPropsWithValueExtends<
	GenericObject extends object,
	GenericValue extends unknown,
> = {
	[Prop in keyof GenericObject]:
	GenericObject[Prop] extends infer InferredValue
		? InferredValue extends GenericValue
			? Prop
			: never
		: never
}[keyof GenericObject];
