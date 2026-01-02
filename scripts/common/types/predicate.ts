export type Predicate<
	GenericFunction extends (input: any, ...args: any[]) => boolean,
> = GenericFunction extends (input: any, ...args: any[]) => input is infer InferredPredicate
	? InferredPredicate
	: Parameters<GenericFunction>[0];
