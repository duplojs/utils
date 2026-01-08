import { type IsEqual } from "@scripts/common";

declare const SymbolForbiddenKey: unique symbol;

export type ForbiddenKey<
	GenericObject extends object,
	GenericKey extends string,
> = (
	GenericKey extends keyof GenericObject
		? { [SymbolForbiddenKey]: `Key ${GenericKey} is forbidden.` }
		: never
) extends infer InferredResult
	? IsEqual<InferredResult, never> extends true
		? unknown
		: InferredResult
	: never;
