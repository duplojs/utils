import { type IsEqual } from "../common";
type ComputeResult<GenericString extends string, GenericSearchString extends string> = Extract<GenericString, `${string}${GenericSearchString}${string}`> extends infer InferredResult extends GenericString ? IsEqual<InferredResult, never> extends true ? GenericString & `${string}${GenericSearchString}${string}` : InferredResult : never;
export declare function includes<GenericString extends string, GenericSearchString extends string>(searchString: GenericSearchString): (input: GenericString) => input is ComputeResult<GenericString, GenericSearchString>;
export declare function includes<GenericString extends string, GenericSearchString extends string>(input: GenericString, searchString: GenericSearchString): input is ComputeResult<GenericString, GenericSearchString>;
export {};
