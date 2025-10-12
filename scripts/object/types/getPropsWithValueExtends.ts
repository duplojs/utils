export type GetPropsWithValueExtends<
	GenericObject extends object,
	GenericValue extends unknown,
> = {
	[Prop in keyof GenericObject]:
	GenericObject[Prop] extends GenericValue
		? Prop
		: never
}[keyof GenericObject];
