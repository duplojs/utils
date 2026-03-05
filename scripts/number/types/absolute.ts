import type * as DString from "@scripts/string";
import { type IsPositive } from "./isPositive";

export type Absolute<
	GenericValue extends number,
> = IsPositive<GenericValue> extends true
	? GenericValue
	: DString.Shift<`${GenericValue}`> extends `${infer InferredResult extends number}`
		? InferredResult
		: never;
