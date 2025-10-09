import { type IsEqual } from "@scripts/common";

export type SplitString<
	GenericString extends string,
	GenericSeparator extends string | RegExp,
	GenericLimit extends number = never,
	GenericDepth extends readonly unknown[] = [],
> = GenericDepth["length"] extends 40
	? string[]
	: GenericSeparator extends string
		? [GenericLimit] extends [never]
			? GenericString extends `${infer InferredBefore}${GenericSeparator}${infer InferredAfter}`
				? [InferredBefore, ...(
					IsEqual<InferredAfter, ""> extends true
						? []
						: SplitString<InferredAfter, GenericSeparator, never, [...GenericDepth, unknown]>
				)]
				: [GenericString]
			: SplitStringWithLimit<GenericString, GenericSeparator, GenericLimit, []>
		: string[];

type SplitStringWithLimit<
	GenericString extends string,
	GenericSeparator extends string,
	GenericLimit extends number,
	GenericResult extends string[],
	GenericCount extends readonly unknown[] = [],
> = GenericResult["length"] extends GenericLimit
	? GenericResult
	: GenericString extends `${infer InferredBefore}${GenericSeparator}${infer InferredAfter}`
		? SplitStringWithLimit<
			InferredAfter,
			GenericSeparator,
			GenericLimit,
			[...GenericResult, InferredBefore],
			[...GenericCount, unknown]
		>
		: [...GenericResult, GenericString];
