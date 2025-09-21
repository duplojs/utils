import { type IsEqual } from "./isEqual";

export type FixDeepFunctionInfer<
	GenericValue extends unknown,
	GenericValueInfer extends GenericValue,
> = IsEqual<GenericValueInfer, never> extends true
	? NoInfer<GenericValue>
	: GenericValueInfer;
