import { type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type Unwrap } from "../../../common";
import { type Primitive } from "../base";
import { type OnlyLiteralPrimitiveNumber } from "../../../clean/types/onlyLiteral";
type ComputeMatcher<GenericInput extends Primitive<number>> = {
    [Prop in Unwrap<GenericInput>]: (value: GenericInput & Primitive<Prop>) => unknown;
};
type ForbiddenMoreKey<GenericInput extends Primitive<number>, GenericMatcher extends ComputeMatcher<GenericInput>> = Exclude<keyof GenericMatcher, Unwrap<GenericInput>> extends infer InferredKey ? IsEqual<InferredKey, never> extends true ? unknown : ComputedTypeError<`Key "${Extract<InferredKey, number>}" is forbidden.`> : never;
/**
 * Performs exhaustive pattern matching on the value of a Clean number primitive.
 * 
 * **Supported call styles:**
 * - Classic: `matchWithNumber(input, matcher)` -> runs the handler matching the wrapped value
 * - Curried: `matchWithNumber(matcher)` -> returns a function waiting for the primitive
 * 
 * A Clean primitive cannot be used directly as an object key, so the matcher uses raw number values as keys. Every possible value must have a handler. The selected handler receives the original Clean primitive narrowed to the matching key, preserving its constraints and `NewType` metadata.
 * 
 * ```ts
 * const status = C.Number.createOrThrow(
 * 	200 as 200 | 404,
 * );
 * 
 * C.matchWithNumber(status, {
 * 	200: () => "success",
 * 	404: () => "missing",
 * }); // "success" | "missing"
 * 
 * pipe(
 * 	status,
 * 	C.matchWithNumber({
 * 		200: (value) => value,
 * 		404: () => status,
 * 	}),
 * ); // C.Primitive<200 | 404>
 * 
 * const positiveStatus = C.Positive.createOrThrow(
 * 	200 as 200 | 404,
 * );
 * 
 * C.matchWithNumber(positiveStatus, {
 * 	200: (value) => value,
 * 	404: (value) => value,
 * }); // C.ConstrainedType<"positive", 200 | 404>
 * ```
 * 
 * @remarks A broad `Primitive<number>` is supported with a `Record<number, handler>` matcher. Literal unions reject missing and additional keys.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithNumber
 * @see [`C.matchWithString`](https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithString)
 * 
 * @namespace C
 * 
 */
export declare function matchWithNumber<GenericInput extends Primitive<number>, GenericMatcher extends ComputeMatcher<GenericInput>>(matcher: FixDeepFunctionInfer<ComputeMatcher<NoInfer<GenericInput>>, GenericMatcher> & ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>): (input: GenericInput & OnlyLiteralPrimitiveNumber<GenericInput>) => ReturnType<NoInfer<GenericMatcher>[keyof GenericMatcher]>;
export declare function matchWithNumber<GenericInput extends Primitive<number>, GenericMatcher extends ComputeMatcher<GenericInput>>(input: GenericInput & OnlyLiteralPrimitiveNumber<GenericInput>, matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher> & ForbiddenMoreKey<GenericInput, GenericMatcher>): ReturnType<GenericMatcher[keyof GenericMatcher]>;
export {};
