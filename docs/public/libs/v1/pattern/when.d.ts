import { type AnyValue, type BreakGenericLink, type IsEqual, type EscapeVoid } from "../common";
import { type PatternResult } from "./result";
/**
 * Applies a handler when a predicate matches.
 * 
 * **Supported call styles:**
 * - Classic: `when(input, predicate, handler)` → returns a result or the input
 * - Curried: `when(predicate, handler)` → returns a function waiting for the input
 * - Classic predicate: `when(input, isType, handler)` → narrows input types
 * - Curried predicate: `when(isType, handler)` → narrows input types
 * 
 * If the predicate matches, the handler runs and the result is wrapped for chaining.
 * The input is not mutated.
 * 
 * ```ts
 * pipe(
 * 	5,
 * 	P.when(
 * 		(value) => value > 3,
 * 		(value) => value * 2,
 * 	),
 * 	P.otherwise((value) => value),
 * ); // 10
 * 
 * A.map(
 * 	<const>["alpha", 2],
 * 	innerPipe(
 * 		P.when(
 * 			isType("string"),
 * 			(value) => value.toUpperCase(),
 * 		),
 * 		P.otherwise((value) => value),
 * 	),
 * ); // ["ALPHA", 2]
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * 
 * @see [`P.otherwise`](https://utils.duplojs.dev/en/v1/api/pattern/otherwise) For fallbacks
 * @see https://utils.duplojs.dev/en/v1/api/pattern/when
 * 
 * @namespace P
 * 
 */
export declare function when<GenericInput extends unknown, GenericInputValue extends Exclude<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, GenericPredicatedInput extends GenericInputValue, GenericOutput extends AnyValue | EscapeVoid>(predicate: (input: GenericInputValue) => input is GenericPredicatedInput, theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput): (input: (GenericInput | GenericInputPatternResult | GenericInputValue)) => (GenericInputPatternResult | Exclude<BreakGenericLink<GenericInput>, GenericPredicatedInput | PatternResult> | PatternResult<GenericOutput>);
export declare function when<GenericInput extends unknown, GenericInputValue extends Exclude<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, GenericOutput extends AnyValue | EscapeVoid>(predicate: (input: GenericInputValue) => boolean, theFunction: (predicatedInput: GenericInputValue) => GenericOutput): (input: (GenericInput | GenericInputPatternResult | GenericInputValue)) => (GenericInputPatternResult | GenericInputValue | PatternResult<GenericOutput>);
export declare function when<GenericInput extends unknown, GenericInputValue extends Exclude<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, GenericPredicatedInput extends GenericInputValue, GenericOutput extends AnyValue | EscapeVoid>(input: (GenericInput | GenericInputPatternResult | GenericInputValue), predicate: (input: GenericInputValue) => input is GenericPredicatedInput, theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput): (GenericInputPatternResult | Exclude<BreakGenericLink<GenericInput>, GenericPredicatedInput | PatternResult> | PatternResult<GenericOutput>);
export declare function when<GenericInput extends unknown, GenericInputValue extends Exclude<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, GenericOutput extends AnyValue | EscapeVoid>(input: (GenericInput | GenericInputPatternResult | GenericInputValue), predicate: (input: GenericInputValue) => boolean, theFunction: (predicatedInput: GenericInputValue) => GenericOutput): (GenericInputPatternResult | GenericInputValue | PatternResult<GenericOutput>);
