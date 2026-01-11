import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type EitherLeft } from "./create";
/**
 * Executes a function only when the input is an EitherLeft. Otherwise, the original value is returned as-is.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsLeft(input, theFunction)` → returns a value
 * - Curried: `whenIsLeft(theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * pipe(
 * 	true
 * 		? E.success("true")
 * 		: E.error("false"),
 * 
 * 	E.whenIsLeft((value) => {
 * 		// type: "false"
 * 	}),
 * );
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsLeft
 * 
 * @namespace E
 * 
 */
export declare function whenIsLeft<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<BreakGenericLink<GenericInput>, EitherLeft>>) => GenericOutput): (input: GenericInput) => Exclude<BreakGenericLink<GenericInput>, EitherLeft> | GenericOutput;
export declare function whenIsLeft<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<BreakGenericLink<GenericInput>, EitherLeft>>) => GenericOutput): Exclude<GenericInput, EitherLeft> | GenericOutput;
