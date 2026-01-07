import { type EscapeVoid, type AnyValue, type BreakGenericLink } from "./types";
/**
 * The when() function applies a transformation if a predicate is true (or if a type guard succeeds). Otherwise, the input value is returned as is. Exists in immediate or curried form.
 * 
 * **Supported call styles:**
 * - Classic: `when(input, predicate, theFunction)` → returns a value
 * - Curried: `when(predicate, theFunction)` → returns a function waiting for the input
 * - Classic predicate: `when(input, predicate, theFunction)` → narrows the input type
 * - Curried predicate: `when(predicate, theFunction)` → narrows the input type
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
 * const direct = when(
 * 	input,
 * 	equal("success"),
 * 	() => "ok",
 * );
 * // result: "ok"
 * 
 * const piped = pipe(
 * 	input,
 * 	when(
 * 		equal("success"),
 * 		() => "ok",
 * 	),
 * );
 * // result: "ok"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/when
 * 
 * @namespace C
 * 
 */
export declare function when<GenericInput extends AnyValue, GenericPredicatedInput extends GenericInput, GenericOutput extends AnyValue | EscapeVoid>(ifFunction: (input: GenericInput) => input is GenericPredicatedInput, theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<BreakGenericLink<GenericInput>, GenericPredicatedInput>;
export declare function when<GenericInput extends AnyValue, GenericPredicatedInput extends GenericInput, GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, ifFunction: (input: GenericInput) => input is GenericPredicatedInput, theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput): GenericOutput | Exclude<GenericInput, GenericPredicatedInput>;
export declare function when<GenericInput extends AnyValue, GenericOutput extends AnyValue | EscapeVoid>(ifFunction: (input: GenericInput) => boolean, theFunction: (predicatedInput: GenericInput) => GenericOutput): (input: GenericInput) => GenericOutput | GenericInput;
export declare function when<GenericInput extends AnyValue, GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, ifFunction: (input: GenericInput) => boolean, theFunction: (predicatedInput: GenericInput) => GenericOutput): GenericOutput | GenericInput;
