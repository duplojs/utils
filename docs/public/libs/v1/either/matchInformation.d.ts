import { type FixDeepFunctionInfer, type GetKindValue, type Kind, type Unwrap } from "../common";
import { informationKind } from "./kind";
import { type Right } from "./right";
import { type Left } from "./left";
type Either = Right | Left;
type ComputeMatcher<GenericEither extends Either> = Extract<{
    [Prop in GetKindValue<typeof informationKind, GenericEither>]: (value: Unwrap<Extract<GenericEither, Kind<typeof informationKind.definition, Prop>>>) => unknown;
}, any>;
/**
 * Exhaustive pattern matching based on Either information. Every information case from the input must be handled.
 * 
 * **Supported call styles:**
 * - Classic: `matchInformation(input, matcher)` → returns the matched callback result
 * - Curried: `matchInformation(matcher)` → returns a function waiting for the input
 * 
 * If the input is not an Either, the input value is returned as-is.
 * 
 * ```ts
 * const result1 = E.matchInformation(
 * 	true
 * 		? E.right("success", 10)
 * 		: E.left("failure", "error"),
 * 	{
 * 		success: (value) => value + 1,
 * 		failure: (value) => value,
 * 	},
 * );
 * // type: number | "error"
 * 
 * const result2 = pipe(
 * 	true
 * 		? E.ok()
 * 		: E.fail(),
 * 	E.matchInformation({
 * 		ok: () => "ok" as const,
 * 		fail: () => "fail" as const,
 * 	}),
 * );
 * // type: "ok" | "fail"
 * 
 * const result3 = E.matchInformation(
 * 	30,
 * 	{},
 * );
 * // type: 30
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/matchInformation
 * 
 * @namespace E
 * 
 */
export declare function matchInformation<GenericInput extends unknown, GenericMatcher extends ComputeMatcher<Extract<GenericInput, Either>>>(matcher: (ComputeMatcher<Extract<NoInfer<GenericInput>, Either>> & GenericMatcher)): (input: GenericInput) => (ReturnType<NoInfer<GenericMatcher[keyof GenericMatcher]>> | Exclude<NoInfer<GenericInput>, Either>);
export declare function matchInformation<GenericInput extends unknown, GenericMatcher extends ComputeMatcher<Extract<GenericInput, Either>>>(input: GenericInput, matcher: FixDeepFunctionInfer<ComputeMatcher<Extract<GenericInput, Either>>, GenericMatcher>): (ReturnType<GenericMatcher[keyof GenericMatcher]> | Exclude<GenericInput, Either>);
export {};
