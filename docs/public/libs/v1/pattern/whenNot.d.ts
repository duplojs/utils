import { type AnyValue, type BreakGenericLink, type IsEqual, type EscapeVoid } from "../common";
import { type PatternResult } from "./result";
/**
 * Applies a handler when a predicate fails.
 * 
 * **Supported call styles:**
 * - Classic: `whenNot(input, predicate, handler)` -> returns a result or the input
 * - Curried: `whenNot(predicate, handler)` -> returns a function waiting for the input
 * - Classic predicate: `whenNot(input, isType, handler)` -> narrows input types
 * - Curried predicate: `whenNot(isType, handler)` -> narrows input types
 * 
 * If the predicate fails, the handler runs and the result is wrapped for chaining.
 * The input is not mutated.
 * 
 * ```ts
 * pipe(
 * 	2,
 * 	P.whenNot(
 * 		(value) => value > 3,
 * 		(value) => value * 2,
 * 	),
 * 	P.otherwise((value) => value),
 * ); // 4
 * 
 * A.map(
 * 	<const>["alpha", 2],
 * 	innerPipe(
 * 		P.whenNot(
 * 			isType("string"),
 * 			(value) => value + 1,
 * 		),
 * 		P.otherwise((value) => value),
 * 	),
 * ); // ["alpha", 3]
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * 
 * @see [`P.otherwise`](https://utils.duplojs.dev/en/v1/api/pattern/otherwise) For fallbacks
 * @see https://utils.duplojs.dev/en/v1/api/pattern/whenNot
 * 
 * @namespace P
 * 
 */
export declare function whenNot<GenericInput extends unknown, GenericInputValue extends Exclude<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, GenericPredicatedInput extends GenericInputValue, GenericOutput extends AnyValue | EscapeVoid>(predicate: (input: GenericInputValue) => input is GenericPredicatedInput, theFunction: (predicatedInput: Exclude<GenericInputValue, GenericPredicatedInput>) => GenericOutput): (input: (GenericInput | GenericInputPatternResult | GenericInputValue)) => (GenericInputPatternResult | Exclude<BreakGenericLink<GenericInput>, Exclude<GenericInputValue, GenericPredicatedInput> | PatternResult> | PatternResult<GenericOutput>);
export declare function whenNot<GenericInput extends unknown, GenericInputValue extends Exclude<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, GenericOutput extends AnyValue | EscapeVoid>(predicate: (input: GenericInputValue) => boolean, theFunction: (predicatedInput: GenericInputValue) => GenericOutput): (input: (GenericInput | GenericInputPatternResult | GenericInputValue)) => (GenericInputPatternResult | GenericInputValue | PatternResult<GenericOutput>);
export declare function whenNot<GenericInput extends unknown, GenericInputValue extends Exclude<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, GenericPredicatedInput extends GenericInputValue, GenericOutput extends AnyValue | EscapeVoid>(input: (GenericInput | GenericInputPatternResult | GenericInputValue), predicate: (input: GenericInputValue) => input is GenericPredicatedInput, theFunction: (predicatedInput: Exclude<GenericInputValue, GenericPredicatedInput>) => GenericOutput): (GenericInputPatternResult | Exclude<BreakGenericLink<GenericInput>, Exclude<GenericInputValue, GenericPredicatedInput> | PatternResult> | PatternResult<GenericOutput>);
export declare function whenNot<GenericInput extends unknown, GenericInputValue extends Exclude<IsEqual<GenericInput, unknown> extends true ? AnyValue : GenericInput, PatternResult>, GenericInputPatternResult extends Extract<GenericInput, PatternResult>, GenericOutput extends AnyValue | EscapeVoid>(input: (GenericInput | GenericInputPatternResult | GenericInputValue), predicate: (input: GenericInputValue) => boolean, theFunction: (predicatedInput: GenericInputValue) => GenericOutput): (GenericInputPatternResult | GenericInputValue | PatternResult<GenericOutput>);
