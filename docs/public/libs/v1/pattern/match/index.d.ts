import { type IsEqual, type AnyValue, type EscapeVoid, type FixDeepFunctionInfer, type BreakGenericLink } from "../../common";
import { type PatternValue, type Pattern } from "../types/pattern";
import { type PatternResult } from "../result";
import { type ComplexMatchedValue, type ComplexUnMatchedValue } from "../types";
import { type MatchBuilder } from "./builder";
export * from "./builder";
/**
 * Creates a match builder or applies a single pattern.
 * 
 * **Supported call styles:**
 * - Classic: `match(input)` → returns a match builder
 * - Classic: `match(input, pattern, handler)` → returns a result or the input
 * - Curried: `match(pattern, handler)` → returns a function waiting for the input
 * 
 * If the input matches the pattern, the handler runs and the result is wrapped for chaining.
 * The input is not mutated.
 * 
 * ```ts
 * const input = <{
 * 	type: "text";
 * 	value: string;
 * } | {
 * 	type: "count";
 * 	value: number;
 * }>{
 * 	type: "text",
 * 	value: "hello",
 * };
 * 
 * P.match(input)
 * 	.with(
 * 		{ type: "text" },
 * 		(item) => item.value.toUpperCase(),
 * 	)
 * 	.with(
 * 		{ type: "count" },
 * 		(item) => `${item.value}:${item.type}`,
 * 	)
 * 	.otherwise(() => "unknown"); // "HELLO"
 * 
 * pipe(
 * 	input,
 * 	P.match(
 * 		{ type: "count" },
 * 		(item) => item.value * 2,
 * 	),
 * 	P.otherwise(() => 0),
 * ); // 4
 * 
 * P.match(input)
 * 	.when(
 * 		(item) => typeof item === "number",
 * 		() => "ok",
 * 	)
 * 	.otherwise(() => "no"); // "ok"
 * ```
 * 
 * @see [`P.when`](https://utils.duplojs.dev/en/v1/api/pattern/when) For predicate branches
 * @see [`P.otherwise`](https://utils.duplojs.dev/en/v1/api/pattern/otherwise) For fallbacks
 * @see https://utils.duplojs.dev/en/v1/api/pattern/match
 * 
 * @namespace P
 * 
 */
export declare function match<GenericInput extends unknown>(input: GenericInput): MatchBuilder<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput>;
export declare function match<GenericInput extends unknown, GenericInputValue extends Exclude<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, const GenericPattern extends Pattern<GenericInputValue>, GenericPatternValue extends PatternValue<GenericPattern>, GenericOutput extends AnyValue | EscapeVoid, GenericMatchedValue extends Extract<ComplexMatchedValue<GenericInputValue, GenericPatternValue>, any>>(pattern: FixDeepFunctionInfer<Pattern<GenericInputValue>, GenericPattern>, theFunction: (value: Extract<ComplexMatchedValue<GenericInputValue, PatternValue<GenericPattern>>, any>) => GenericOutput): (input: GenericInput | GenericInputValue | GenericInputPatternResult) => BreakGenericLink<((IsEqual<GenericMatchedValue, never> extends true ? never : PatternResult<GenericOutput>) | GenericInputPatternResult | Extract<ComplexUnMatchedValue<GenericInputValue, GenericPatternValue>, any>)>;
export declare function match<GenericInput extends unknown, GenericInputValue extends Exclude<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, const GenericPattern extends Pattern<GenericInputValue>, GenericPatternValue extends PatternValue<GenericPattern>, GenericOutput extends AnyValue | EscapeVoid, GenericMatchedValue extends Extract<ComplexMatchedValue<GenericInputValue, GenericPatternValue>, any>>(input: GenericInput | GenericInputValue | GenericInputPatternResult, pattern: FixDeepFunctionInfer<Pattern<GenericInputValue>, GenericPattern>, theFunction: (value: Extract<ComplexMatchedValue<GenericInputValue, PatternValue<GenericPattern>>, any>) => GenericOutput): BreakGenericLink<(IsEqual<GenericMatchedValue, never> extends true ? never : PatternResult<GenericOutput>) | GenericInputPatternResult | Extract<ComplexUnMatchedValue<GenericInputValue, GenericPatternValue>, any>>;
