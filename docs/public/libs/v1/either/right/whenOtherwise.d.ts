import { type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap } from "../../common";
import { type Right } from "./create";
import { type Left } from "../left";
type Either = Right | Left;
/**
 * Conditional mapping on Right values with explicit fallback for all non-Right inputs.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsRightOtherwise(input, theFunction, otherwiseFunction)` → returns a value
 * - Curried: `whenIsRightOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input
 * 
 * When input is Right, `theFunction` receives the unwrapped value. Otherwise, `otherwiseFunction` receives the original remaining input (Left or non-Either).
 * 
 * ```ts
 * const result1 = E.whenIsRightOtherwise(
 * 	E.right("success", 10),
 * 	(value) => value + 1,
 * 	() => 0,
 * );
 * // type: number
 * 
 * const result2 = E.whenIsRightOtherwise(
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
 * 	E.whenIsRightOtherwise(
 * 		() => "right" as const,
 * 		() => "otherwise" as const,
 * 	),
 * );
 * // type: "right" | "otherwise"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsRightOtherwise
 * 
 * @namespace E
 * 
 */
export declare function whenIsRightOtherwise<const GenericInput extends unknown, const GenericOutput1 extends AnyValue | EscapeVoid, const GenericOutput2 extends AnyValue | EscapeVoid>(theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Right>>) => GenericOutput1, otherwiseFunction: (value: (Extract<BreakGenericLink<GenericInput>, Left> | Exclude<GenericInput, Either>)) => GenericOutput2): (input: GenericInput) => (BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>);
export declare function whenIsRightOtherwise<const GenericInput extends unknown, const GenericOutput1 extends AnyValue | EscapeVoid, const GenericOutput2 extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Right>>) => GenericOutput1, otherwiseFunction: (value: (Extract<BreakGenericLink<GenericInput>, Left> | Exclude<GenericInput, Either>)) => GenericOutput2): (BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>);
export {};
