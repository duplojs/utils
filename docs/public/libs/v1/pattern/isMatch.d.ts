import { type ForcePredicate, type AnyValue, type FixDeepFunctionInfer } from "../common";
import { type Pattern, type PatternValue } from "./types/pattern";
import { type ComplexMatchedValue } from "./types";
/**
 * Checks whether a value matches a pattern.
 * 
 * **Supported call styles:**
 * - Classic: `isMatch(input, pattern)` → returns a boolean
 * - Curried: `isMatch(pattern)` → returns a function waiting for the input
 * - Classic predicate: `isMatch(input, pattern)` → narrows the input type
 * - Curried predicate: `isMatch(pattern)` → narrows the input type
 * 
 * The input is not mutated.
 * 
 * ```ts
 * const input = <{
 * 	kind: "text";
 * 	content: string;
 * } | {
 * 	kind: "image";
 * 	url: string;
 * }>{
 * 	kind: "text",
 * 	content: "hello",
 * };
 * 
 * if (P.isMatch(input, { kind: "text" })) {
 * 	// { kind: "text", content: "hello" }
 * }
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * 
 * @see https://utils.duplojs.dev/en/v1/api/pattern/isMatch
 * 
 * @namespace P
 * 
 */
export declare function isMatch<GenericInput extends AnyValue, const GenericPattern extends Pattern<GenericInput>>(pattern: FixDeepFunctionInfer<Pattern<GenericInput>, GenericPattern>): (input: GenericInput) => input is ForcePredicate<GenericInput, ComplexMatchedValue<GenericInput, PatternValue<GenericPattern>>>;
export declare function isMatch<GenericInput extends AnyValue, const GenericPattern extends Pattern<GenericInput>>(input: GenericInput, pattern: FixDeepFunctionInfer<Pattern<GenericInput>, GenericPattern>): input is ForcePredicate<GenericInput, ComplexMatchedValue<GenericInput, PatternValue<GenericPattern>>>;
