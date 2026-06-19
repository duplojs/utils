import { type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type Unwrap } from "../../../common";
import { type Primitive } from "../base";
import { type OnlyLiteralPrimitiveString } from "../../../clean/types/onlyLiteral";
type ComputeMatcher<GenericInput extends Primitive<string>> = {
    [Prop in Unwrap<GenericInput>]: (value: GenericInput & Primitive<Prop>) => unknown;
};
type ForbiddenMoreKey<GenericInput extends Primitive<string>, GenericMatcher extends ComputeMatcher<GenericInput>> = Exclude<keyof GenericMatcher, Unwrap<GenericInput>> extends infer InferredKey ? IsEqual<InferredKey, never> extends true ? unknown : ComputedTypeError<`Key "${Extract<InferredKey, string>}" is forbidden.`> : never;
/**
 * Performs exhaustive pattern matching on the value of a Clean string primitive.
 * 
 * **Supported call styles:**
 * - Classic: `matchWithString(input, matcher)` -> runs the handler matching the wrapped value
 * - Curried: `matchWithString(matcher)` -> returns a function waiting for the primitive
 * 
 * A Clean primitive cannot be used directly as an object key, so the matcher uses raw string values as keys. Every possible value must have a handler. The selected handler receives the original Clean primitive narrowed to the matching key, preserving its constraints and `NewType` metadata.
 * 
 * ```ts
 * const status = C.String.createOrThrow(
 * 	"success" as "success" | "failure",
 * );
 * 
 * C.matchWithString(status, {
 * 	success: () => 200,
 * 	failure: () => 500,
 * }); // 200 | 500
 * 
 * pipe(
 * 	status,
 * 	C.matchWithString({
 * 		success: (value) => value,
 * 		failure: () => status,
 * 	}),
 * ); // C.Primitive<"success" | "failure">
 * 
 * const noBlankStatus = C.NoBlank.createOrThrow(
 * 	"success" as "success" | "failure",
 * );
 * 
 * C.matchWithString(noBlankStatus, {
 * 	success: (value) => value,
 * 	failure: (value) => value,
 * }); // C.ConstrainedType<"no-blank", "success" | "failure">
 * ```
 * 
 * @remarks A broad `Primitive<string>` is supported with a `Record<string, handler>` matcher. Literal unions reject missing and additional keys.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithString
 * @see [`C.matchWithNumber`](https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithNumber)
 * 
 * @namespace C
 * 
 */
export declare function matchWithString<GenericInput extends Primitive<string>, GenericMatcher extends ComputeMatcher<GenericInput>>(matcher: FixDeepFunctionInfer<ComputeMatcher<NoInfer<GenericInput>>, GenericMatcher> & ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>): (input: GenericInput & OnlyLiteralPrimitiveString<GenericInput>) => ReturnType<NoInfer<GenericMatcher>[keyof GenericMatcher]>;
export declare function matchWithString<GenericInput extends Primitive<string>, GenericMatcher extends ComputeMatcher<GenericInput>>(input: GenericInput & OnlyLiteralPrimitiveString<GenericInput>, matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher> & ForbiddenMoreKey<GenericInput, GenericMatcher>): ReturnType<GenericMatcher[keyof GenericMatcher]>;
export {};
