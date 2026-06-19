import { type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type OnlyLiteralNumber } from "../common";
type ComputeMatcher<GenericInput extends number> = {
    [Prop in GenericInput]: (value: Prop) => unknown;
};
type ForbiddenMoreKey<GenericInput extends number, GenericMatcher extends ComputeMatcher<GenericInput>> = Exclude<keyof GenericMatcher, GenericInput> extends infer InferredKey ? IsEqual<InferredKey, never> extends true ? unknown : ComputedTypeError<`Key "${Extract<InferredKey, number>}" is forbidden.`> : never;
/**
 * Performs exhaustive pattern matching on a number literal union.
 * 
 * **Supported call styles:**
 * - Classic: `matchWithNumber(input, matcher)` -> runs the handler matching the input
 * - Curried: `matchWithNumber(matcher)` -> returns a function waiting for the input
 * 
 * Every possible literal must have exactly one matcher key, guaranteeing that no case is left unprocessed. The selected handler receives the number literal corresponding to its key, and the result type is the union of every handler return type.
 * 
 * ```ts
 * const status = 200 as 200 | 404;
 * 
 * P.matchWithNumber(status, {
 * 	200: () => "success",
 * 	404: () => "missing",
 * }); // "success" | "missing"
 * 
 * pipe(
 * 	status,
 * 	P.matchWithNumber({
 * 		200: (value) => `code: ${value}`,
 * 		404: () => "not found",
 * 	}),
 * ); // string
 * 
 * const retry = P.matchWithNumber(
 * 	status,
 * 	{
 * 		200: () => false,
 * 		404: (value) => value === 404,
 * 	},
 * ); // boolean
 * ```
 * 
 * @remarks Non-literal `number` inputs are rejected because a finite matcher cannot be exhaustive for them.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/pattern/matchWithNumber
 * @see [`P.matchWithString`](https://utils.duplojs.dev/en/v1/api/pattern/matchWithString)
 * 
 * @namespace P
 * 
 */
export declare function matchWithNumber<GenericInput extends number, GenericMatcher extends ComputeMatcher<GenericInput>>(matcher: GenericMatcher & ComputeMatcher<NoInfer<GenericInput>> & ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>): (input: GenericInput & OnlyLiteralNumber<GenericInput>) => ReturnType<NoInfer<GenericMatcher>[keyof GenericMatcher]>;
export declare function matchWithNumber<GenericInput extends number, GenericMatcher extends ComputeMatcher<GenericInput>>(input: GenericInput & OnlyLiteralNumber<GenericInput>, matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher> & ForbiddenMoreKey<GenericInput, GenericMatcher>): ReturnType<GenericMatcher[keyof GenericMatcher]>;
export {};
