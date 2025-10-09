export type Not<
	GenericBoolean extends boolean,
> = GenericBoolean extends false
	? true
	: false;
