export type GetEntries<
	O extends object,
	T = {
		[P in keyof O]-?: O[P]
	},
> = {
	[P in keyof T]: [P, T[P]]
}[keyof T][];

export function getTypedEntries<
	O extends object,
>(object: O) {
	return Object.entries(object) as GetEntries<O>;
}
