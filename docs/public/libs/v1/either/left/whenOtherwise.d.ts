import { type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap } from "../../common";
import { type Right } from "../right";
import { type Left } from "./create";
type Either = Right | Left;
/**
 * Conditional mapping on Left values with explicit fallback for all non-Left inputs.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsLeftOtherwise(input, theFunction, otherwiseFunction)` → returns a value
 * - Curried: `whenIsLeftOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input
 * 
 * When input is Left, `theFunction` receives the unwrapped value. Otherwise, `otherwiseFunction` receives the original remaining input (Right or non-Either).
 * 
 * ```ts
 * const result1 = E.whenIsLeftOtherwise(
 * 	E.left("failure", "error"),
 * 	(value) => value,
 * 	() => "fallback",
 * );
 * // type: string
 * 
 * const result2 = E.whenIsLeftOtherwise(
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
 * 	E.whenIsLeftOtherwise(
 * 		() => "left" as const,
 * 		() => "otherwise" as const,
 * 	),
 * );
 * // type: "left" | "otherwise"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsLeftOtherwise
 * 
 * @namespace E
 * 
 */
export declare function whenIsLeftOtherwise<const GenericInput extends unknown, const GenericOutput1 extends AnyValue | EscapeVoid, const GenericOutput2 extends AnyValue | EscapeVoid>(theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Left>>) => GenericOutput1, otherwiseFunction: (value: (Extract<BreakGenericLink<GenericInput>, Right> | Exclude<GenericInput, Either>)) => GenericOutput2): (input: GenericInput) => (BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>);
export declare function whenIsLeftOtherwise<const GenericInput extends unknown, const GenericOutput1 extends AnyValue | EscapeVoid, const GenericOutput2 extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Left>>) => GenericOutput1, otherwiseFunction: (value: (Extract<BreakGenericLink<GenericInput>, Right> | Exclude<GenericInput, Either>)) => GenericOutput2): (BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>);
export {};
