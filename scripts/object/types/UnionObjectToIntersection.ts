import { type UnionToIntersection } from "@scripts/common";

export type UnionObjectToIntersection<
	GenericValue extends object,
> = UnionToIntersection<GenericValue> extends infer InferredObject extends object
	? InferredObject
	: never;
