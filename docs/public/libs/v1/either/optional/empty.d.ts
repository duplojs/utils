import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { optionalKind } from "./base";
import { optional } from "./create";
import { type Left } from "../left";
import { type Right } from "../right";
export declare const optionalEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/optional-empty", unknown>>;
/**
 * @deprecated use optionalEmptyKind
 */
export declare const eitherOptionalEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/optional-empty", unknown>>;
type _OptionalEmpty = (Left<"optional", undefined> & Kind<typeof optionalKind.definition> & Kind<typeof optionalEmptyKind.definition>);
export interface OptionalEmpty extends _OptionalEmpty {
}
/**
 * @deprecated use OptionalEmpty
 */
export type EitherOptionalEmpty = OptionalEmpty;
type Either = Right | Left;
/**
 * Type guard that detects an OptionalEmpty.
 * 
 * Signature: `isOptionalEmpty(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeValue = E.optional(true ? "value" : undefined);
 * 
 * if (E.isOptionalEmpty(maybeValue)) {
 * 	// type: E.OptionalEmpty
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isOptionalEmpty
 * 
 * @namespace E
 * 
 */
/**
 * Builds an Left<"optional"> containing undefined.
 * 
 * Signature: `optionalEmpty()` → returns a value
 * 
 * ```ts
 * const result = E.optionalEmpty();
 * 
 * // type: E.OptionalEmpty
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
 * // type: E.OptionalFilled<"value"> | "empty"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsOptionalEmpty
 * 
 * @namespace E
 * 
 */
export declare function optionalEmpty(): OptionalEmpty;
export declare function isOptionalEmpty<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, OptionalEmpty>;
type ToOptionalEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof optional<GenericValue>>;
export declare function whenIsOptionalEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<BreakGenericLink<GenericInput>>, OptionalEmpty>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToOptionalEither<BreakGenericLink<GenericInput>>, OptionalEmpty>;
export declare function whenIsOptionalEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<BreakGenericLink<GenericInput>>, OptionalEmpty>>) => GenericOutput): GenericOutput | Exclude<ToOptionalEither<GenericInput>, OptionalEmpty>;
export {};
