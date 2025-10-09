import { type IsEqual } from "./isEqual";

export type UnionContain<
	GenericUnion extends unknown,
	GenericValue extends unknown,
> = IsEqual<
	GenericUnion extends any
		? IsEqual<GenericUnion, GenericValue>
		: never,
	boolean
>;
