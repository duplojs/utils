import { type IsEqual } from "../common";
type ComputeResult<GenericString extends string, GenericSearchString extends string> = Extract<GenericString, `${string}${GenericSearchString}`> extends infer InferredResult extends GenericString ? IsEqual<InferredResult, never> extends true ? GenericString & `${string}${GenericSearchString}` : InferredResult : never;
export declare function endsWith<GenericString extends string, GenericSearchString extends string>(searchString: GenericSearchString): (input: GenericString) => input is ComputeResult<GenericString, GenericSearchString>;
export declare function endsWith<GenericString extends string, GenericSearchString extends string>(input: GenericString, searchString: GenericSearchString): input is ComputeResult<GenericString, GenericSearchString>;
export {};
