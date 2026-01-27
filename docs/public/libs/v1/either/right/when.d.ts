import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Right } from "./create";
/**
 * Applies a function only when the input is an Right. Otherwise, the original value is returned as-is.
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
export declare function whenIsRight<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<BreakGenericLink<GenericInput>, Right>>) => GenericOutput): (input: GenericInput) => Exclude<BreakGenericLink<GenericInput>, Right> | GenericOutput;
export declare function whenIsRight<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<BreakGenericLink<GenericInput>, Right>>) => GenericOutput): Exclude<GenericInput, Right> | GenericOutput;
