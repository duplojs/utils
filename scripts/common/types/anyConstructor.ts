export type AnyConstructor<
	GenericArgs extends any[] = any[],
	GenericInstance extends any = any,
> = new(...args: GenericArgs) => GenericInstance;

export type AnyAbstractConstructor<
	GenericArgs extends any[] = any[],
	GenericInstance extends any = any,
> = (abstract new(...args: GenericArgs) => GenericInstance);
