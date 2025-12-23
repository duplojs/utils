import { type IsEqual } from "../../common";
export type First<GenericValue extends string> = IsEqual<GenericValue, ""> extends true ? undefined : GenericValue extends `${infer InferredFirst}${string}` ? InferredFirst : string | undefined;
