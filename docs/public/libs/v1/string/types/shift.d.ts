import type { IsEqual } from "../../common";
import type { TemplateLiteralContainLargeType } from "./templateLiteralContainLargeType";
export type Shift<GenericValue extends string> = TemplateLiteralContainLargeType<GenericValue> extends true ? string : IsEqual<GenericValue, ""> extends true ? "" : GenericValue extends `${infer _InferredFirst}${infer InferredRest}` ? InferredRest : string;
