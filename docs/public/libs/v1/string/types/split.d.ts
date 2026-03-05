import { type Or, type IsEqual } from "../../common";
import { type Includes } from "./includes";
import { type TemplateLiteralContainLargeType } from "./templateLiteralContainLargeType";
export type Split<GenericString extends string, GenericSeparator extends string, GenericLimit extends number = number, GenericLastResult extends string[] = []> = IsEqual<GenericLimit, 0> extends true ? [] : Or<[
    TemplateLiteralContainLargeType<GenericString>,
    TemplateLiteralContainLargeType<GenericSeparator>
]> extends true ? [string, ...string[]] : GenericString extends `${infer InferredBefore}${GenericSeparator}${infer InferredAfter}` ? [...GenericLastResult, InferredBefore] extends infer InferredResult extends any[] ? IsEqual<InferredAfter, ""> extends true ? InferredResult : IsEqual<InferredResult["length"], 250> extends true ? Includes<InferredAfter, GenericSeparator> extends true ? [...InferredResult, ...string[]] : InferredResult : IsEqual<InferredResult["length"], GenericLimit> extends true ? InferredResult : Split<InferredAfter, GenericSeparator, GenericLimit, InferredResult> : never : [...GenericLastResult, GenericString];
