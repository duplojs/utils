import { type FixDeepFunctionInfer, type OnlyLiteralString } from "../common";
import { type ForbiddenKey } from "../object";
type ComputeMatcher<GenericInput extends string> = {
    [Prop in GenericInput]: (value: Prop) => unknown;
};
type ForbiddenMoreKey<GenericInput extends string, GenericMatcher extends ComputeMatcher<GenericInput>> = ForbiddenKey<GenericMatcher, Extract<Exclude<keyof GenericMatcher, GenericInput>, string>>;
/**
 * Performs exhaustive pattern matching on a string literal union.
 * 
 * **Supported call styles:**
 * - Classic: `matchWithString(input, matcher)` -> runs the handler matching the input
 * - Curried: `matchWithString(matcher)` -> returns a function waiting for the input
 * 
 * Every possible literal must have exactly one matcher key, guaranteeing that no case is left unprocessed. The selected handler receives the string literal corresponding to its key, and the result type is the union of every handler return type.
 * 
 * ```ts
 * const status = "success" as "success" | "failure";
 * 
 * P.matchWithString(status, {
 * 	success: () => 200,
 * 	failure: () => 500,
 * }); // 200 | 500
 * 
 * pipe(
 * 	status,
 * 	P.matchWithString({
 * 		success: (value) => value.toUpperCase(),
 * 		failure: () => "retry",
 * 	}),
 * ); // string
 * 
 * const message = P.matchWithString(
 * 	status,
 * 	{
 * 		success: (value) => `received: ${value}`,
 * 		failure: (value) => `received: ${value}`,
 * 	},
 * ); // string
 * ```
 * 
 * @remarks Non-literal `string` inputs are rejected because a finite matcher cannot be exhaustive for them.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/pattern/matchWithString
 * @see [`P.matchWithNumber`](https://utils.duplojs.dev/en/v1/api/pattern/matchWithNumber)
 * 
 * @namespace P
 * 
 */
export declare function matchWithString<GenericInput extends string, GenericMatcher extends ComputeMatcher<GenericInput>>(matcher: GenericMatcher & ComputeMatcher<NoInfer<GenericInput>> & ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>): (input: GenericInput & OnlyLiteralString<GenericInput>) => ReturnType<NoInfer<GenericMatcher>[keyof GenericMatcher]>;
export declare function matchWithString<GenericInput extends string, GenericMatcher extends ComputeMatcher<GenericInput>>(input: GenericInput & OnlyLiteralString<GenericInput>, matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher> & ForbiddenMoreKey<GenericInput, GenericMatcher>): ReturnType<GenericMatcher[keyof GenericMatcher]>;
export {};
