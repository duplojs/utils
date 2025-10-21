import { type IsEqual } from "../../common";
export type Last<GenericValue extends string> = IsEqual<GenericValue, ""> extends true ? undefined : GenericValue extends `${string}${infer InferredLeft}${infer InferredRight}` ? IsEqual<InferredRight, ""> extends true ? InferredLeft : Last<`${InferredLeft}${InferredRight}`> : string | undefined;
