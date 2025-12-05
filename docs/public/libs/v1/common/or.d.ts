import { type AnyPredicate, type AnyFunction, type IsEqual } from "./types";
type ExtractPredicate<GenericPredicatedInput extends readonly AnyFunction<any[], boolean>[]> = GenericPredicatedInput extends readonly [
    (input: any, ...args: any[]) => input is infer InferredPredicate,
    ...infer InferredRest extends readonly AnyPredicate[]
] ? InferredRest extends readonly [] ? InferredPredicate : ExtractPredicate<InferredRest> extends infer InferredResult ? IsEqual<InferredResult, never> extends true ? never : InferredPredicate | InferredResult : never : never;
export declare function or<GenericInput extends unknown, const GenericArrayPredicatedInput extends readonly [
    (input: GenericInput) => input is any,
    (input: GenericInput) => input is any,
    ...((input: GenericInput) => input is any)[]
]>(predicatedList: GenericArrayPredicatedInput): (input: GenericInput) => input is Extract<GenericInput, ExtractPredicate<GenericArrayPredicatedInput>>;
export declare function or<GenericInput extends unknown>(predicatedList: [
    (input: GenericInput) => boolean,
    (input: GenericInput) => boolean,
    ...((input: GenericInput) => boolean)[]
]): (input: GenericInput) => boolean;
export declare function or<GenericInput extends unknown, const GenericArrayPredicatedInput extends readonly [
    (input: GenericInput) => input is any,
    (input: GenericInput) => input is any,
    ...((input: GenericInput) => input is any)[]
]>(input: GenericInput, predicatedList: GenericArrayPredicatedInput): input is Extract<GenericInput, ExtractPredicate<GenericArrayPredicatedInput>>;
export declare function or<GenericInput extends unknown>(input: GenericInput, predicatedList: [
    (input: GenericInput) => boolean,
    (input: GenericInput) => boolean,
    ...((input: GenericInput) => boolean)[]
]): boolean;
export {};
