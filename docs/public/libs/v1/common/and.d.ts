import { type IsEqual, type AnyFunction, type UnionToIntersection } from "./types";
type ExtractIntersection<GenericInput extends unknown, GenericPredicatedInput extends AnyFunction<any[], boolean>[], GenericResult extends unknown = GenericInput> = GenericPredicatedInput extends [
    (input: any) => input is infer InferredPredicate,
    ...infer InferredRest extends AnyFunction<any[], boolean>[]
] ? Extract<GenericResult, InferredPredicate> extends infer InferredResult extends GenericInput ? InferredRest extends readonly [] ? InferredResult : ExtractIntersection<GenericInput, InferredRest, InferredResult> : never : never;
type ExtractPredicate<GenericInput extends unknown, GenericPredicatedInput extends AnyFunction<any[], boolean>[]> = GenericPredicatedInput extends [
    (input: any) => input is infer InferredPredicate,
    ...infer InferredRest extends AnyFunction<any[], boolean>[]
] ? InferredRest extends readonly [] ? InferredPredicate : InferredPredicate | ExtractPredicate<GenericInput, InferredRest> : GenericInput;
type ComputeResult<GenericInput extends unknown, GenericPredicatedInput extends AnyFunction<any[], boolean>[]> = ExtractIntersection<GenericInput, GenericPredicatedInput> extends infer InferredResult extends GenericInput ? IsEqual<InferredResult, never> extends true ? GenericInput & UnionToIntersection<ExtractPredicate<GenericInput, GenericPredicatedInput>> : InferredResult : never;
export declare function and<GenericInput extends unknown, GenericArrayPredicatedInput extends [
    (input: GenericInput) => input is any,
    (input: GenericInput) => input is any,
    ...((input: GenericInput) => input is any)[]
]>(predicatedList: GenericArrayPredicatedInput): (input: GenericInput) => input is ComputeResult<GenericInput, GenericArrayPredicatedInput>;
export declare function and<GenericInput extends unknown>(predicatedList: [
    (input: GenericInput) => boolean,
    (input: GenericInput) => boolean,
    ...((input: GenericInput) => boolean)[]
]): (input: GenericInput) => boolean;
export declare function and<GenericInput extends unknown, GenericArrayPredicatedInput extends [
    (input: GenericInput) => input is any,
    (input: GenericInput) => input is any,
    ...((input: GenericInput) => input is any)[]
]>(input: GenericInput, predicatedList: GenericArrayPredicatedInput): input is ComputeResult<GenericInput, GenericArrayPredicatedInput>;
export declare function and<GenericInput extends unknown>(input: GenericInput, predicatedList: [
    (input: GenericInput) => boolean,
    (input: GenericInput) => boolean,
    ...((input: GenericInput) => boolean)[]
]): boolean;
export {};
