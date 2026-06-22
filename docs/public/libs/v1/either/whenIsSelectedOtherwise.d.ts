import { type GetKindValue, type Kind, type Unwrap } from "../common";
import { type ForbiddenKey, type GetPropsWithValue } from "../object";
import { informationKind } from "./kind";
import { type Left } from "./left";
import { type Right } from "./right";
type Either = Right | Left;
type ForbiddenMoreKey<GenericInput extends unknown, GenericSelector extends Record<string, boolean>> = ForbiddenKey<GenericSelector, Extract<Exclude<keyof GenericSelector, GetKindValue<typeof informationKind, Extract<GenericInput, Either>>>, string>>;
type SelectedKind<GenericSelector extends Record<string, boolean>> = Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true>, string>>;
type CallbackSelectedKind<GenericSelector extends Record<string, boolean>> = Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true> | GetPropsWithValue<GenericSelector, boolean>, string>>;
/**
 * Runs one callback for selected Either informations and an otherwise callback for every unselected raw input.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsSelectedOtherwise(input, selector, theFunction, otherwiseFunction)` → returns a callback result
 * - Curried: `whenIsSelectedOtherwise(selector, theFunction, otherwiseFunction)` → returns a function waiting for the input
 * 
 * The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.
 * 
 * ```ts
 * const selector = {
 * 	success: true,
 * 	failure: false,
 * } as const;
 * 
 * const matched = E.whenIsSelectedOtherwise(
 * 	true
 * 		? E.right("success", 42)
 * 		: E.left("failure", "error"),
 * 	selector,
 * 	(value) => value,
 * 	() => 0,
 * ); // 42
 * 
 * const fallback = E.whenIsSelectedOtherwise(
 * 	false
 * 		? E.right("success", 42)
 * 		: E.left("failure", "error"),
 * 	selector,
 * 	(value) => value,
 * 	(value) => value,
 * ); // E.Left<"failure", "error">
 * 
 * const piped = pipe(
 * 	true
 * 		? E.right("success", 42)
 * 		: E.left("failure", "error"),
 * 	E.whenIsSelectedOtherwise(
 * 		selector,
 * 		(value) => value,
 * 		() => 0,
 * 	),
 * ); // 42
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsSelectedOtherwise
 * 
 * @namespace E
 * 
 */
export declare function whenIsSelectedOtherwise<GenericInput extends unknown, const GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>, const GenericOutput extends unknown, const GenericOtherwiseOutput extends unknown>(selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>, theFunction: (value: Unwrap<Extract<GenericInput, CallbackSelectedKind<GenericSelector>>>) => GenericOutput, otherwiseFunction: (value: Exclude<GenericInput, SelectedKind<GenericSelector>>) => GenericOtherwiseOutput): (input: GenericInput) => GenericOutput | GenericOtherwiseOutput;
export declare function whenIsSelectedOtherwise<GenericInput extends unknown, const GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>, const GenericOutput extends unknown, const GenericOtherwiseOutput extends unknown>(input: GenericInput, selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>, theFunction: (value: Unwrap<Extract<GenericInput, CallbackSelectedKind<GenericSelector>>>) => GenericOutput, otherwiseFunction: (value: Exclude<GenericInput, SelectedKind<GenericSelector>>) => GenericOtherwiseOutput): GenericOutput | GenericOtherwiseOutput;
export {};
