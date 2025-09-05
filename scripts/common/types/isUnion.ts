import { type IsEqual } from "./isEqual";

export type IsUnion<
	GenericValue extends unknown,
	GenericCloneValue extends unknown = GenericValue,
> = GenericValue extends unknown
	? IsEqual<GenericValue, GenericCloneValue> extends true
		? false
		: true
	: never;
