import { type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap } from "../../common";
import { type Right } from "../right";
import { type Left } from "./create";
type Either = Right | Left;
/**
 * Conditional mapping on Left values with explicit fallback for all non-Left inputs.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsLeftElse(input, theFunction, elseFunction)` → returns a value
 * - Curried: `whenIsLeftElse(theFunction, elseFunction)` → returns a function waiting for the input
 * 
 * When input is Left, `theFunction` receives the unwrapped value. Otherwise, `elseFunction` receives the original remaining input (Right or non-Either).
 * 
 * ```ts
 * const result1 = E.whenIsLeftElse(
 * 	E.left("failure", "error"),
 * 	(value) => value,
 * 	() => "fallback",
 * );
 * // type: string
 * 
 * const result2 = E.whenIsLeftElse(
 * 	E.right("success", 10),
 * 	(value) => value,
 * 	(value) => value,
 * );
 * // type: E.Right<"success", 10>
 * 
 * const result3 = pipe(
 * 	true
 * 		? E.ok()
 * 		: E.fail(),
 * 	E.whenIsLeftElse(
 * 		() => "left" as const,
 * 		() => "else" as const,
 * 	),
 * );
 * // type: "left" | "else"
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsLeftElse
 * 
 * @namespace E
 * 
 */
export declare function whenIsLeftElse<const GenericInput extends unknown, const GenericOutput1 extends AnyValue | EscapeVoid, const GenericOutput2 extends AnyValue | EscapeVoid>(theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Left>>) => GenericOutput1, elseFunction: (value: (Extract<BreakGenericLink<GenericInput>, Right> | Exclude<GenericInput, Either>)) => GenericOutput2): (input: GenericInput) => (BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>);
export declare function whenIsLeftElse<const GenericInput extends unknown, const GenericOutput1 extends AnyValue | EscapeVoid, const GenericOutput2 extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Left>>) => GenericOutput1, elseFunction: (value: (Extract<BreakGenericLink<GenericInput>, Right> | Exclude<GenericInput, Either>)) => GenericOutput2): (BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>);
export {};
