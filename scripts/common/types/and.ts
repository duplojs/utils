export type And<
	GenericBooleans extends [boolean, ...boolean[]],
> = GenericBooleans[number] extends true
	? true
	: false;
