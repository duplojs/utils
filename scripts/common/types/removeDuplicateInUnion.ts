import { type IsEqual } from "./isEqual";
import { type IsUnion } from "./isUnion";
import { type LastUnionElement } from "./lastUnionElement";

export type RemoveDuplicateInUnion<
	GenericValue extends unknown,
> = IsUnion<GenericValue> extends true
	? LastUnionElement<GenericValue> extends infer InferredValue
		? (
			| InferredValue
			| RemoveDuplicateInUnion<
				GenericValue extends any
					? IsEqual<GenericValue, InferredValue> extends true
						? never
						: GenericValue
					: never
			>
		)
		: never
	: GenericValue;
