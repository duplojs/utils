export type OverrideInterface<
	O extends object,
	T extends object,
> = Omit<O, keyof T> & T;
