import { type FixDeepFunctionInfer } from "../common";
import { type Pattern, type ToolPattern } from "./types/pattern";
export declare function union<GenericInput extends unknown, const GenericPatterns extends readonly [
    Pattern<GenericInput extends infer InferredInput ? InferredInput : never>,
    ...Pattern<GenericInput extends infer InferredInput ? InferredInput : never>[]
]>(...patterns: FixDeepFunctionInfer<readonly [Pattern<GenericInput>, ...Pattern<GenericInput>[]], GenericPatterns>): ToolPattern<GenericInput, GenericPatterns[number] extends infer InferredPattern ? InferredPattern : never>;
