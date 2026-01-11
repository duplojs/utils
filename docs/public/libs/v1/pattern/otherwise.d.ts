import { type AnyValue, type Unwrap } from "../common";
import { type PatternResult } from "./result";
/**
 * Applies a fallback handler when no prior pattern matched.
 * 
 * **Supported call styles:**
 * - Classic: `otherwise(input, handler)` → returns the unwrapped result or fallback
 * - Curried: `otherwise(handler)` → returns a function waiting for the input
 * 
 * If the input is already a pattern result, it is unwrapped and returned.
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
 * @see [`P.match`](https://utils.duplojs.dev/en/v1/api/pattern/match) For building match chains
 * @see https://utils.duplojs.dev/en/v1/api/pattern/otherwise
 * 
 * @namespace P
 * 
 */
export declare function otherwise<GenericInput extends AnyValue, GenericInputValue extends Exclude<GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, GenericOutput extends AnyValue>(theFunction: (rest: GenericInputValue) => GenericOutput): (input: GenericInput | GenericInputPatternResult | GenericInputValue) => (GenericOutput | Unwrap<GenericInputPatternResult>);
export declare function otherwise<GenericInput extends AnyValue, GenericInputValue extends Exclude<GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, GenericOutput extends AnyValue>(input: GenericInput | GenericInputPatternResult | GenericInputValue, theFunction: (rest: GenericInputValue) => GenericOutput): (GenericOutput | Unwrap<GenericInputPatternResult>);
