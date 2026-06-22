import { type AnyValue, type BreakGenericLink, type EscapeVoid, type Unwrap } from "../../common";
import { type Left } from "../left";
import { type Right } from "../right";
import { optional } from "./create";
import { type OptionalEmpty } from "./empty";
type Either = Right | Left;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof optional<GenericValue>>;
type MatchingInput<GenericInput> = GenericInput extends unknown ? [ToEither<GenericInput>] extends [OptionalEmpty] ? GenericInput : never : never;
type OtherwiseInput<GenericInput> = Exclude<BreakGenericLink<GenericInput>, MatchingInput<BreakGenericLink<GenericInput>>>;
/**
 * Runs one callback for OptionalEmpty values and an otherwise callback for every remaining raw input.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsOptionalEmptyOtherwise(input, theFunction, otherwiseFunction)` → returns a callback result
 * - Curried: `whenIsOptionalEmptyOtherwise(theFunction, otherwiseFunction)` → returns a function waiting for the input
 * 
 * The matching callback keeps the same unwrapped-value contract as the corresponding `when` function. The otherwise callback receives the original raw input, excluding only inputs known to match the condition.
 * 
 * ```ts
 * const matched = E.whenIsOptionalEmptyOtherwise(
 * 	undefined,
 * 	(value) => value,
 * 	() => "otherwise",
 * ); // matching raw value
 * 
 * const fallback = E.whenIsOptionalEmptyOtherwise(
 * 	"value" as const,
 * 	(value) => value,
 * 	(value) => value,
 * ); // original raw input
 * 
 * const piped = pipe(
 * 	undefined,
 * 	E.whenIsOptionalEmptyOtherwise(
 * 		(value) => value,
 * 		() => "otherwise",
 * 	),
 * ); // matching raw value
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsOptionalEmptyOtherwise
 * 
 * @namespace E
 * 
 * 
 */
export declare function whenIsOptionalEmptyOtherwise<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid, const GenericOtherwiseOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, OptionalEmpty>>) => GenericOutput, otherwiseFunction: (value: OtherwiseInput<GenericInput>) => GenericOtherwiseOutput): (input: GenericInput) => BreakGenericLink<GenericOutput> | BreakGenericLink<GenericOtherwiseOutput>;
export declare function whenIsOptionalEmptyOtherwise<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid, const GenericOtherwiseOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, OptionalEmpty>>) => GenericOutput, otherwiseFunction: (value: OtherwiseInput<GenericInput>) => GenericOtherwiseOutput): BreakGenericLink<GenericOutput> | BreakGenericLink<GenericOtherwiseOutput>;
export {};
