export type Or<
	GenericBooleans extends [boolean, ...boolean[]],
> = GenericBooleans[number] extends false
	? false
	: true;
