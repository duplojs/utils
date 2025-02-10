export type GetPropsWithTrueValue<
	O extends object,
> = {
	[P in keyof O]: O[P] extends true ? P : never
}[keyof O];
