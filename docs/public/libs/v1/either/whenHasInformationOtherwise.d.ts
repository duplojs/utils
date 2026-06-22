import { type BreakGenericLink, type Kind, type Unwrap, type WrappedValue } from "../common";
import { type Left } from "./left";
import { type Right } from "./right";
import { informationKind } from "./kind";
type Either = Right | Left;
/**
 * Runs one callback when an Either information matches and an otherwise callback for every remaining raw input.
 * 
 * **Supported call styles:**
 * - Classic: `whenHasInformationOtherwise(input, information, theFunction, otherwiseFunction)` → returns a callback result
 * - Curried: `whenHasInformationOtherwise(information, theFunction, otherwiseFunction)` → returns a function waiting for the input
 * 
 * The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.
 * 
 * ```ts
 * const matched = E.whenHasInformationOtherwise(
 * 	true
 * 		? E.right("success", 42)
 * 		: E.left("failure", "error"),
 * 	"success",
 * 	(value) => value,
 * 	() => 0,
 * ); // 42
 * 
 * const fallback = E.whenHasInformationOtherwise(
 * 	false
 * 		? E.right("success", 42)
 * 		: E.left("failure", "error"),
 * 	"success",
 * 	(value) => value,
 * 	(value) => value,
 * ); // E.Left<"failure", "error">
 * 
 * const piped = pipe(
 * 	true
 * 		? E.right("success", 42)
 * 		: E.left("failure", "error"),
 * 	E.whenHasInformationOtherwise(
 * 		"success",
 * 		(value) => value,
 * 		() => 0,
 * 	),
 * ); // 42
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenHasInformationOtherwise
 * 
 * @namespace E
 * 
 */
export declare function whenHasInformationOtherwise<const GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never), const GenericOutput extends unknown, const GenericOtherwiseOutput extends unknown>(information: GenericInformation | GenericInformation[], theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Kind<typeof informationKind.definition, GenericInformation> & WrappedValue>>) => GenericOutput, otherwiseFunction: (value: Exclude<BreakGenericLink<GenericInput>, Kind<typeof informationKind.definition, GenericInformation>>) => GenericOtherwiseOutput): (input: GenericInput) => GenericOutput | GenericOtherwiseOutput;
export declare function whenHasInformationOtherwise<const GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never), const GenericOutput extends unknown, const GenericOtherwiseOutput extends unknown>(input: GenericInput, information: GenericInformation | GenericInformation[], theFunction: (value: Unwrap<Extract<BreakGenericLink<GenericInput>, Kind<typeof informationKind.definition, GenericInformation> & WrappedValue>>) => GenericOutput, otherwiseFunction: (value: Exclude<BreakGenericLink<GenericInput>, Kind<typeof informationKind.definition, GenericInformation>>) => GenericOtherwiseOutput): GenericOutput | GenericOtherwiseOutput;
export {};
