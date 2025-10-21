import { type AnyFunction } from "./types";
type ExtractPredicate<GenericInput extends unknown, GenericPredicatedInput extends AnyFunction<any[], boolean>[]> = GenericPredicatedInput extends [
    (input: any) => input is infer InferredPredicate,
    ...infer InferredRest extends AnyFunction<any[], boolean>[]
] ? InferredRest extends readonly [] ? InferredPredicate : InferredPredicate | ExtractPredicate<GenericInput, InferredRest> : GenericInput;
export declare function or<GenericInput extends unknown, GenericArrayPredicatedInput extends [
    (input: GenericInput) => input is any,
    (input: GenericInput) => input is any,
    ...((input: GenericInput) => input is any)[]
]>(predicatedList: GenericArrayPredicatedInput): (input: GenericInput) => input is Extract<GenericInput, ExtractPredicate<GenericInput, GenericArrayPredicatedInput>>;
export declare function or<GenericInput extends unknown>(predicatedList: [
    (input: GenericInput) => boolean,
    (input: GenericInput) => boolean,
    ...((input: GenericInput) => boolean)[]
]): (input: GenericInput) => boolean;
export declare function or<GenericInput extends unknown, GenericArrayPredicatedInput extends [
    (input: GenericInput) => input is any,
    (input: GenericInput) => input is any,
    ...((input: GenericInput) => input is any)[]
]>(input: GenericInput, predicatedList: GenericArrayPredicatedInput): input is Extract<GenericInput, ExtractPredicate<GenericInput, GenericArrayPredicatedInput>>;
export declare function or<GenericInput extends unknown>(input: GenericInput, predicatedList: [
    (input: GenericInput) => boolean,
    (input: GenericInput) => boolean,
    ...((input: GenericInput) => boolean)[]
]): boolean;
export {};
