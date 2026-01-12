import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { eitherOptionalKind } from "./base";
import { optional } from "./create";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
export declare const eitherOptionalEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/optional-empty", unknown>>;
type _EitherOptionalEmpty = (EitherLeft<"optional", undefined> & Kind<typeof eitherOptionalKind.definition> & Kind<typeof eitherOptionalEmptyKind.definition>);
export interface EitherOptionalEmpty extends _EitherOptionalEmpty {
}
type Either = EitherRight | EitherLeft;
/**
 * Type guard that detects an EitherOptionalEmpty.
 * 
 * Signature: `isOptionalEmpty(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeValue = E.optional(true ? "value" : undefined);
 * 
 * if (E.isOptionalEmpty(maybeValue)) {
 * 	// type: E.EitherOptionalEmpty
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isOptionalEmpty
 * 
 * @namespace E
 * 
 */
/**
 * Builds an EitherLeft<"optional"> containing undefined.
 * 
 * Signature: `optionalEmpty()` → returns a value
 * 
 * ```ts
 * const result = E.optionalEmpty();
 * 
 * // type: E.EitherOptionalEmpty
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/optionalEmpty
 * 
 * @namespace E
 * 
 */
/**
 * Applies a function only when an optional is empty (undefined).
 * 
 * **Supported call styles:**
 * - Classic: `whenIsOptionalEmpty(input, theFunction)` → returns a value
 * - Curried: `whenIsOptionalEmpty(theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * const result = pipe(
 * 	E.optional(true ? "value" : undefined),
 * 	E.whenIsOptionalEmpty(() => "empty"),
 * );
 * 
 * // type: E.EitherOptionalFilled<"value"> | "empty"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsOptionalEmpty
 * 
 * @namespace E
 * 
 */
export declare function optionalEmpty(): EitherOptionalEmpty;
export declare function isOptionalEmpty<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherOptionalEmpty>;
type ToOptionalEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof optional<GenericValue>>;
export declare function whenIsOptionalEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<BreakGenericLink<GenericInput>>, EitherOptionalEmpty>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToOptionalEither<BreakGenericLink<GenericInput>>, EitherOptionalEmpty>;
export declare function whenIsOptionalEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<BreakGenericLink<GenericInput>>, EitherOptionalEmpty>>) => GenericOutput): GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalEmpty>;
export {};
