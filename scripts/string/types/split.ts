import { type Or, type IsEqual } from "@scripts/common";
import { type Includes } from "./includes";

export type Split<
	GenericString extends string,
	GenericSeparator extends string,
	GenericLimit extends number = number,
	GenericLastResult extends string[] = [],
> = Or<[
	IsEqual<GenericString, string>,
	IsEqual<GenericSeparator, string>,
]> extends true
	? string[]
	: GenericString extends `${infer InferredBefore}${GenericSeparator}${infer InferredAfter}`
		? [...GenericLastResult, InferredBefore] extends infer InferredResult extends any[]
			? IsEqual<InferredAfter, ""> extends true
				? InferredResult
				: IsEqual<InferredResult["length"], 250> extends true
					? Includes<InferredAfter, GenericSeparator> extends true
						? [...InferredResult, ...string[]]
						: InferredResult
					: IsEqual<InferredResult["length"], GenericLimit> extends true
						? InferredResult
						: Split<
							InferredAfter,
							GenericSeparator,
							GenericLimit,
							InferredResult
						>
			: never
		: [...GenericLastResult, GenericString];
