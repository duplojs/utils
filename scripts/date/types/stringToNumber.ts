export type StringToNumber<
	GenericString extends string,
> = GenericString extends `${infer InferredNumber extends number}`
	? InferredNumber
	: never;
