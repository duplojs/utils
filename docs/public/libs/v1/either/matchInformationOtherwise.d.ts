import { type AnyFunction, type FixDeepFunctionInfer, type GetKindValue, type Kind, type Unwrap } from "../common";
import { informationKind } from "./kind";
import { type Right } from "./right";
import { type Left } from "./left";
import { type ForbiddenKey, type GetPropsWithValueExtends } from "../object";
type Either = Right | Left;
type ComputeMatcher<GenericEither extends Either> = Extract<{
    [Prop in GetKindValue<typeof informationKind, GenericEither>]?: (value: Unwrap<Extract<GenericEither, Kind<typeof informationKind.definition, Prop>>>) => unknown;
}, any>;
type ForbiddenMoreKey<GenericInput extends unknown, GenericMatcher extends ComputeMatcher<Extract<GenericInput, Either>>> = ForbiddenKey<GenericMatcher, Extract<Exclude<keyof GenericMatcher, GetKindValue<typeof informationKind, Extract<GenericInput, Either>>>, string>>;
/**
 * Non-exhaustive pattern matching based on Either information. Unhandled cases are delegated to an `otherwise` callback.
 * 
 * **Supported call styles:**
 * - Classic: `matchInformationOtherwise(input, matcher, otherwise)` → returns a value
 * - Curried: `matchInformationOtherwise(matcher, otherwise)` → returns a function waiting for the input
 * 
 * If the input is not an Either, or if no matcher callback exists for the current information, `otherwise` is executed.
 * 
 * ```ts
 * const result1 = E.matchInformationOtherwise(
 * 	E.right("success", 10),
 * 	{
 * 		success: (value) => value + 1,
 * 	},
 * 	() => "otherwise" as const,
 * );
 * // type: number | "otherwise"
 * 
 * const result2 = E.matchInformationOtherwise(
 * 	E.left("failure", "error"),
 * 	{},
 * 	(value) => value,
 * );
 * // type: E.Left<"failure", "error">
 * 
 * const result3 = pipe(
 * 	true
 * 		? E.ok()
 * 		: E.fail(),
 * 	E.matchInformationOtherwise(
 * 		{
 * 			ok: () => "ok" as const,
 * 		},
 * 		() => "fallback" as const,
 * 	),
 * );
 * // type: "ok" | "fallback"
 * 
 * const result4 = E.matchInformationOtherwise(
 * 	42,
 * 	{},
 * 	(value) => value + 1,
 * );
 * // type: number
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/matchInformationOtherwise
 * 
 * @namespace E
 * 
 */
export declare function matchInformationOtherwise<GenericInput extends unknown, GenericMatcher extends ComputeMatcher<Extract<GenericInput, Either>>, GenericOutput extends unknown, GenericError extends ForbiddenMoreKey<GenericInput, GenericMatcher>>(matcher: (ComputeMatcher<Extract<NoInfer<GenericInput>, Either>> & GenericMatcher & NoInfer<GenericError>), otherwise: (value: Exclude<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValueExtends<GenericMatcher, AnyFunction>, string>>>) => GenericOutput): (input: GenericInput) => (ReturnType<NoInfer<Extract<GenericMatcher[keyof GenericMatcher], AnyFunction>>> | GenericOutput);
export declare function matchInformationOtherwise<GenericInput extends unknown, GenericMatcher extends ComputeMatcher<Extract<GenericInput, Either>>, GenericOutput extends unknown>(input: GenericInput, matcher: FixDeepFunctionInfer<ComputeMatcher<Extract<GenericInput, Either>>, GenericMatcher> & ForbiddenMoreKey<GenericInput, GenericMatcher>, otherwise: (value: Exclude<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValueExtends<GenericMatcher, AnyFunction>, string>>>) => GenericOutput): (ReturnType<NoInfer<Extract<GenericMatcher[keyof GenericMatcher], AnyFunction>>> | GenericOutput);
export {};
