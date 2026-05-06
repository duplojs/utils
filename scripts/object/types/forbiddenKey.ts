import { type ComputedTypeError, type IsEqual } from "@scripts/common";

export type ForbiddenKey<
	GenericObject extends object,
	GenericKey extends string,
> = (
	GenericKey extends keyof GenericObject
		? ComputedTypeError<`Key ${GenericKey} is forbidden.`>
		: never
) extends infer InferredResult
	? IsEqual<InferredResult, never> extends true
		? unknown
		: InferredResult
	: never;
