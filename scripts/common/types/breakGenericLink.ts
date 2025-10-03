export type BreakGenericLink<
	GenericValue extends unknown,
> = [GenericValue][GenericValue extends never ? 0 : never];
