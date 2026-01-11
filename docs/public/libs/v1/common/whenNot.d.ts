import { type EscapeVoid, type AnyValue, type BreakGenericLink } from "./types";
/**
 * The whenNot() function applies a transformation only when the predicate fails (or when the type guard does not match). Otherwise, the input is returned as is. Exists in immediate and curried versions.
 * 
 * **Supported call styles:**
 * - Classic: `whenNot(input, predicate, theFunction)` → returns a value
 * - Curried: `whenNot(predicate, theFunction)` → returns a function waiting for the input
 * - Classic predicate: `whenNot(input, predicate, theFunction)` → narrows the input type
 * - Curried predicate: `whenNot(predicate, theFunction)` → narrows the input type
 * 
 * Predicate overloads (type guards) narrow the output type.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * type Input = "success" | "error";
 * 
 * const input = "error" as Input;
 * 
 * const direct = whenNot(
 * 	input,
 * 	equal("success"),
 * 	() => "retry",
 * );
 * // result: "retry"
 * 
 * const piped = pipe(
 * 	input,
 * 	whenNot(
 * 		equal("success"),
 * 		() => "retry",
 * 	),
 * );
 * // result: "retry"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/whenNot
 * 
 * @namespace C
 * 
 */
export declare function whenNot<GenericInput extends AnyValue, GenericPredicatedInput extends GenericInput, GenericOutput extends AnyValue | EscapeVoid>(ifFunction: (input: GenericInput) => input is GenericPredicatedInput, theFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput): (input: GenericInput) => GenericOutput | BreakGenericLink<GenericPredicatedInput>;
export declare function whenNot<GenericInput extends AnyValue, GenericPredicatedInput extends GenericInput, GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, ifFunction: (input: GenericInput) => input is GenericPredicatedInput, theFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput): GenericOutput | GenericPredicatedInput;
export declare function whenNot<GenericInput extends AnyValue, GenericOutput extends AnyValue | EscapeVoid>(ifFunction: (input: GenericInput) => boolean, theFunction: (predicatedInput: GenericInput) => GenericOutput): (input: GenericInput) => GenericOutput | GenericInput;
export declare function whenNot<GenericInput extends AnyValue, GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, ifFunction: (input: GenericInput) => boolean, theFunction: (predicatedInput: GenericInput) => GenericOutput): GenericOutput | GenericInput;
