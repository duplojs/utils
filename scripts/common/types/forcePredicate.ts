export type ForcePredicate<
	GenericArgValue extends unknown,
	GenericWantValue extends unknown,
> = (
	{ [Prop in GenericWantValue as "prop"]: Prop }
	& { [key: string]: GenericArgValue }
)["prop"];
