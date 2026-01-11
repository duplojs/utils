import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type EitherRight } from "./create";
/**
 * Applies a function only when the input is an EitherRight. Otherwise, the original value is returned as-is.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsRight(input, theFunction)` → returns a value
 * - Curried: `whenIsRight(theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * pipe(
 * 	true
 * 		? E.success("true")
 * 		: E.error("false"),
 * 
 * 	E.whenIsRight((value) => {
 * 		// type: "true"
 * 	}),
 * );
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsRight
 * 
 * @namespace E
 * 
 */
export declare function whenIsRight<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<BreakGenericLink<GenericInput>, EitherRight>>) => GenericOutput): (input: GenericInput) => Exclude<BreakGenericLink<GenericInput>, EitherRight> | GenericOutput;
export declare function whenIsRight<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<BreakGenericLink<GenericInput>, EitherRight>>) => GenericOutput): Exclude<GenericInput, EitherRight> | GenericOutput;
