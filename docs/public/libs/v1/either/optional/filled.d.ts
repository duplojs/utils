import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { eitherOptionalKind } from "./base";
import { optional } from "./create";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
export declare const eitherOptionalFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/optional-filled", unknown>>;
type _EitherOptionalFilled<GenericValue extends unknown = unknown> = (EitherRight<"optional", GenericValue> & Kind<typeof eitherOptionalKind.definition> & Kind<typeof eitherOptionalFilledKind.definition>);
export interface EitherOptionalFilled<GenericValue extends unknown = unknown> extends _EitherOptionalFilled<GenericValue> {
}
type Either = EitherRight | EitherLeft;
/**
 * Type guard that checks that an optional contains a value.
 * 
 * Signature: `isOptionalFilled(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeValue = E.optional(true ? "value" : undefined);
 * 
 * if (E.isOptionalFilled(maybeValue)) {
 * 	// type: E.EitherOptionalFilled<"value">
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isOptionalFilled
 * 
 * @namespace E
 * 
 */
/**
 * Builds an EitherRight<"optional"> when the value is defined.
 * 
 * Signature: `optionalFilled(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.optionalFilled("value");
 * 
 * // type: E.EitherOptionalFilled<"value">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/optionalFilled
 * 
 * @namespace E
 * 
 */
/**
 * Applies a callback only when the optional Either contains a value (OptionalFilled).
 * 
 * **Supported call styles:**
 * - Classic: `whenIsOptionalFilled(input, theFunction)` → returns a value
 * - Curried: `whenIsOptionalFilled(theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * const result = pipe(
 * 	E.optional(true ? "value" : undefined),
 * 	E.whenIsOptionalFilled(S.capitalize),
 * );
 * 
 * // type: E.EitherOptionalEmpty | "Value"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsOptionalFilled
 * 
 * @namespace E
 * 
 */
export declare function optionalFilled<const GenericValue extends unknown>(value: GenericValue): EitherOptionalFilled<GenericValue>;
export declare function isOptionalFilled<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherOptionalFilled>;
type ToOptionalEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof optional<GenericValue>>;
export declare function whenIsOptionalFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<BreakGenericLink<GenericInput>>, EitherOptionalFilled>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToOptionalEither<BreakGenericLink<GenericInput>>, EitherOptionalFilled>;
export declare function whenIsOptionalFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<BreakGenericLink<GenericInput>>, EitherOptionalFilled>>) => GenericOutput): GenericOutput | Exclude<ToOptionalEither<GenericInput>, EitherOptionalFilled>;
export {};
