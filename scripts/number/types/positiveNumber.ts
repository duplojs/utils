export type PositiveNumber<
	GenericNumber extends number,
> = `${GenericNumber}` extends `-${string}` | "0"
	? never
	: GenericNumber;
