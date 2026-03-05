import type { IsEqual } from "@scripts/common";
import type { TemplateLiteralContainLargeType } from "./templateLiteralContainLargeType";

export type Pop<
	GenericValue extends string,
> = TemplateLiteralContainLargeType<GenericValue> extends true
	? string
	: IsEqual<GenericValue, ""> extends true
		? ""
		: GenericValue extends `${infer InferredFirst}${infer InferredRest}`
			? IsEqual<InferredRest, ""> extends true
				? ""
				: Pop<InferredRest> extends infer InferredResult extends string
					? `${InferredFirst}${InferredResult}`
					: never
			: string;
