import { type IsEqual } from "../common";
type ComputeResult<GenericString extends string, GenericSearchString extends string> = Extract<GenericString, `${GenericSearchString}${string}`> extends infer InferredResult extends GenericString ? IsEqual<InferredResult, never> extends true ? GenericString & `${GenericSearchString}${string}` : InferredResult : never;
export declare function startsWith<GenericString extends string, GenericSearchString extends string>(searchString: GenericSearchString): (input: GenericString) => input is ComputeResult<GenericString, GenericSearchString>;
export declare function startsWith<GenericString extends string, GenericSearchString extends string>(input: GenericString, searchString: GenericSearchString): input is ComputeResult<GenericString, GenericSearchString>;
export {};
