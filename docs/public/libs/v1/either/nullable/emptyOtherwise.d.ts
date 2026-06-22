import { type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap } from "../../common";
import { type Left } from "../left";
import { type Right } from "../right";
import { nullable } from "./create";
import { type NullableEmpty } from "./empty";
type Either = Right | Left;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullable<GenericValue>>;
type MatchingInput<GenericInput> = GenericInput extends unknown ? [ToEither<GenericInput>] extends [NullableEmpty] ? GenericInput : never : never;
type OtherwiseInput<GenericInput> = Exclude<BreakGenericLink<GenericInput>, MatchingInput<BreakGenericLink<GenericInput>>>;
/**
 * Runs one callback for NullableEmpty values and an otherwise callback for every remaining raw input.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsNullableEmptyOtherwise(input, theFunction, otherwiseFunction)` → returns a callback result
 * - Curried: `whenIsNullableEmptyOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input
 * 
 * The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.
 * 
 * ```ts
 * const matched = E.whenIsNullableEmptyOtherwise(
 * 	null,
 * 	(value) => value,
 * 	() => "otherwise",
 * ); // matching raw value
 * 
 * const fallback = E.whenIsNullableEmptyOtherwise(
 * 	"value" as const,
 * 	(value) => value,
 * 	(value) => value,
 * ); // original raw input
 * 
 * const piped = pipe(
 * 	null,
 * 	E.whenIsNullableEmptyOtherwise(
 * 		(value) => value,
 * 		() => "otherwise",
 * 	),
 * ); // matching raw value
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsNullableEmptyOtherwise
 * 
 * @namespace E
 * 
 * 
 */
export declare function whenIsNullableEmptyOtherwise<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid, const GenericOtherwiseOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullableEmpty>>) => GenericOutput, otherwiseFunction: (value: OtherwiseInput<GenericInput>) => GenericOtherwiseOutput): (input: GenericInput) => BreakGenericLink<GenericOutput> | BreakGenericLink<GenericOtherwiseOutput>;
export declare function whenIsNullableEmptyOtherwise<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid, const GenericOtherwiseOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullableEmpty>>) => GenericOutput, otherwiseFunction: (value: OtherwiseInput<GenericInput>) => GenericOtherwiseOutput): BreakGenericLink<GenericOutput> | BreakGenericLink<GenericOtherwiseOutput>;
export {};
