import { type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap } from "../../common";
import { type Right } from "./create";
import { type Left } from "../left";
type Either = Right | Left;
/**
 * Conditional mapping on Right values with explicit fallback for all non-Right inputs.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsRightElse(input, theFunction, elseFunction)` → returns a value
 * - Curried: `whenIsRightElse(theFunction, elseFunction)` → returns a function waiting for the input
 * 
 * When input is Right, `theFunction` receives the unwrapped value. Otherwise, `elseFunction` receives the original remaining input (Left or non-Either).
 * 
 * ```ts
 * const result1 = E.whenIsRightElse(
 * 	E.right("success", 10),
 * 	(value) => value + 1,
 * 	() => 0,
 * );
 * // type: number
 * 
 * const result2 = E.whenIsRightElse(
 * 	E.left("failure", "error"),
 * 	(value) => value,
 * 	(value) => value,
 * );
 * // type: E.Left<"failure", "error">
 * 
 * const result3 = pipe(
 * 	true
 * 		? E.ok()
 * 		: E.fail(),
 * 	E.whenIsRightElse(
 * 		() => "right" as const,
 * 		() => "else" as const,
 * 	),
 * );
 * // type: "right" | "else"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsRightElse
 * 
 * @namespace E
 * 
 */
export declare function whenIsRightElse<const GenericInput extends unknown, const GenericOutput1 extends AnyValue | EscapeVoid, const GenericOutput2 extends AnyValue | EscapeVoid>(theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Right>>) => GenericOutput1, elseFunction: (value: (Extract<BreakGenericLink<GenericInput>, Left> | Exclude<GenericInput, Either>)) => GenericOutput2): (input: GenericInput) => (BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>);
export declare function whenIsRightElse<const GenericInput extends unknown, const GenericOutput1 extends AnyValue | EscapeVoid, const GenericOutput2 extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Right>>) => GenericOutput1, elseFunction: (value: (Extract<BreakGenericLink<GenericInput>, Left> | Exclude<GenericInput, Either>)) => GenericOutput2): (BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>);
export {};
