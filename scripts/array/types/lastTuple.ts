export type LastTuple<
	GenericTuple extends readonly unknown[],
	GenericDefault extends unknown = never,
> = GenericTuple extends readonly [...infer _, infer GenericLastElement]
	? GenericLastElement
	: GenericDefault;
