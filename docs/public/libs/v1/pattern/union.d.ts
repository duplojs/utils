import { type FixDeepFunctionInfer } from "../common";
import { type Pattern, type ToolPattern } from "./types/pattern";
/**
 * Creates a pattern that matches any of the provided patterns.
 * 
 * Signature: `union(...patterns)` → returns a pattern tool
 * 
 * The returned tool can be used with `match` or `isMatch`.
 * 
 * ```ts
 * const input = <{
 * 	kind: "text";
 * 	content: string;
 * } | {
 * 	kind: "error";
 * 	message: string;
 * } | {
 * 	kind: "image";
 * 	url: string;
 * }>{
 * 	kind: "text",
 * 	content: "hello",
 * };
 * 
 * P.match(
 * 	input,
 * 	forward({ kind: P.union("text", "image") }),
 * 	() => {
 * 		// { kind: "text"; content: string; } | { kind: "error"; message: string;}
 * 	},
 * );
 * ```
 * 
 * @see [`P.isMatch`](https://utils.duplojs.dev/en/v1/api/pattern/isMatch) For checking values
 * @see https://utils.duplojs.dev/en/v1/api/pattern/union
 * 
 * @namespace P
 * 
 */
export declare function union<GenericInput extends unknown, const GenericPatterns extends readonly [
    Pattern<GenericInput extends infer InferredInput ? InferredInput : never>,
    ...Pattern<GenericInput extends infer InferredInput ? InferredInput : never>[]
]>(...patterns: FixDeepFunctionInfer<readonly [Pattern<GenericInput>, ...Pattern<GenericInput>[]], GenericPatterns>): ToolPattern<GenericInput, GenericPatterns[number] extends infer InferredPattern ? InferredPattern : never>;
