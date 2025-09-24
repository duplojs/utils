export type PadZero<
	GenericNumber extends number,
> = GenericNumber extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
	? `0${GenericNumber}`
	: `${GenericNumber}`;
