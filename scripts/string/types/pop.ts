import type { IsEqual } from "@scripts/common";
import type { TemplateLiteralContainLargeType } from "./templateLiteralContainLargeType";

type _Pop<
	GenericValue extends string,
	GenericCount extends never[] = [],
> = IsEqual<GenericCount["length"], 250> extends true
	? string
	: GenericValue extends `${infer InferredFirst}${infer InferredRest}`
		? IsEqual<InferredRest, ""> extends true
			? ""
			: _Pop<InferredRest, [...GenericCount, never]> extends infer InferredResult extends string
				? `${InferredFirst}${InferredResult}`
				: never
		: string;

export type Pop<
	GenericValue extends string,
> = TemplateLiteralContainLargeType<GenericValue> extends true
	? string
	: IsEqual<GenericValue, ""> extends true
		? ""
		: _Pop<GenericValue>;
