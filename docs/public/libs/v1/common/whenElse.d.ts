import { type EscapeVoid, type AnyValue, type BreakGenericLink } from "./types";
/**
 * The whenElse() function offers two explicit branches: if the predicate is true, theFunction runs, otherwise elseFunction. Return types stay disjoint and preserved.
 * 
 * **Supported call styles:**
 * - Classic: `whenElse(input, predicate, theFunction, elseFunction)` → returns a value
 * - Curried: `whenElse(predicate, theFunction, elseFunction)` → returns a function waiting for the input
 * - Classic predicate: `whenElse(input, predicate, theFunction, elseFunction)` → narrows the input type
 * - Curried predicate: `whenElse(predicate, theFunction, elseFunction)` → narrows the input type
 * 
 * Predicate overloads (type guards) narrow the output type.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * type Input = "success" | "error";
 * 
 * const input = "success" as Input;
 * 
 * const direct = whenElse(
 * 	input,
 * 	equal("success"),
 * 	() => "ok",
 * 	() => "fail",
 * );
 * // result: "ok"
 * 
 * const piped = pipe(
 * 	input,
 * 	whenElse(
 * 		equal("success"),
 * 		() => "ok",
 * 		() => "fail",
 * 	),
 * );
 * // result: "ok"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/whenElse
 * 
 * @namespace C
 * 
 */
export declare function whenElse<GenericInput extends AnyValue, GenericPredicatedInput extends GenericInput, GenericOutput1 extends AnyValue | EscapeVoid, GenericOutput2 extends AnyValue | EscapeVoid>(predicate: (input: GenericInput) => input is GenericPredicatedInput, theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput1, elseFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput2): (input: GenericInput) => BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>;
export declare function whenElse<GenericInput extends AnyValue, GenericPredicatedInput extends GenericInput, GenericOutput1 extends AnyValue | EscapeVoid, GenericOutput2 extends AnyValue | EscapeVoid>(input: GenericInput, predicate: (input: GenericInput) => input is GenericPredicatedInput, theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput1, elseFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput2): GenericOutput1 | GenericOutput2;
export declare function whenElse<GenericInput extends AnyValue, GenericOutput1 extends AnyValue | EscapeVoid, GenericOutput2 extends AnyValue | EscapeVoid>(predicate: (input: GenericInput) => boolean, theFunction: (predicatedInput: GenericInput) => GenericOutput1, elseFunction: (predicatedInput: GenericInput) => GenericOutput2): (input: GenericInput) => GenericOutput1 | GenericOutput2;
export declare function whenElse<GenericInput extends AnyValue, GenericOutput1 extends AnyValue | EscapeVoid, GenericOutput2 extends AnyValue | EscapeVoid>(input: GenericInput, predicate: (input: GenericInput) => boolean, theFunction: (predicatedInput: GenericInput) => GenericOutput1, elseFunction: (predicatedInput: GenericInput) => GenericOutput2): BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>;
