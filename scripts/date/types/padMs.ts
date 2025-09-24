export type PadMs<
	GenericNumber extends number,
> = `${GenericNumber}` extends `${infer _}${infer _}${infer _}`
	? `${GenericNumber}`
	: `${GenericNumber}` extends `${infer _}${infer _}`
		? `0${GenericNumber}`
		: `00${GenericNumber}`;
