import { type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap } from "../../common";
import { type Left } from "../left";
import { type Right } from "../right";
import { nullish } from "./create";
import { type NullishEmpty } from "./empty";
type Either = Right | Left;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullish<GenericValue>>;
type MatchingInput<GenericInput> = GenericInput extends unknown ? [ToEither<GenericInput>] extends [NullishEmpty] ? GenericInput : never : never;
type OtherwiseInput<GenericInput> = Exclude<BreakGenericLink<GenericInput>, MatchingInput<BreakGenericLink<GenericInput>>>;
/**
 * Runs one callback for NullishEmpty values and an otherwise callback for every remaining raw input.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsNullishEmptyOtherwise(input, theFunction, otherwiseFunction)` → returns a callback result
 * - Curried: `whenIsNullishEmptyOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input
 * 
 * The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.
 * 
 * ```ts
 * const matched = E.whenIsNullishEmptyOtherwise(
 * 	undefined,
 * 	(value) => value,
 * 	() => "otherwise",
 * ); // matching raw value
 * 
 * const fallback = E.whenIsNullishEmptyOtherwise(
 * 	"value" as const,
 * 	(value) => value,
 * 	(value) => value,
 * ); // original raw input
 * 
 * const piped = pipe(
 * 	undefined,
 * 	E.whenIsNullishEmptyOtherwise(
 * 		(value) => value,
 * 		() => "otherwise",
 * 	),
 * ); // matching raw value
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsNullishEmptyOtherwise
 * 
 * @namespace E
 * 
 * 
 */
export declare function whenIsNullishEmptyOtherwise<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid, const GenericOtherwiseOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullishEmpty>>) => GenericOutput, otherwiseFunction: (value: OtherwiseInput<GenericInput>) => GenericOtherwiseOutput): (input: GenericInput) => BreakGenericLink<GenericOutput> | BreakGenericLink<GenericOtherwiseOutput>;
export declare function whenIsNullishEmptyOtherwise<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid, const GenericOtherwiseOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullishEmpty>>) => GenericOutput, otherwiseFunction: (value: OtherwiseInput<GenericInput>) => GenericOtherwiseOutput): BreakGenericLink<GenericOutput> | BreakGenericLink<GenericOtherwiseOutput>;
export {};
