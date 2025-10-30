import { type IsEqual } from "./isEqual";

export type UnionContain<
	GenericUnion extends unknown,
	GenericValue extends unknown,
> = IsEqual<
	GenericValue extends any
		? IsEqual<
			| (
				GenericUnion extends any
					? IsEqual<GenericUnion, GenericValue>
					: never
			)
			| false,
			boolean
		>
		: never,
	true
>;
