import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { optionalKind } from "./base";
import { optional } from "./create";
import { type Left } from "../left";
import { type Right } from "../right";
export declare const optionalFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/optional-filled", unknown>>;
/**
 * @deprecated use optionalFilledKind
 */
export declare const eitherOptionalFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/optional-filled", unknown>>;
type _OptionalFilled<GenericValue extends unknown = unknown> = (Right<"optional", GenericValue> & Kind<typeof optionalKind.definition> & Kind<typeof optionalFilledKind.definition>);
export interface OptionalFilled<GenericValue extends unknown = unknown> extends _OptionalFilled<GenericValue> {
}
/**
 * @deprecated use OptionalFilled
 */
export type EitherOptionalFilled<GenericValue extends unknown = unknown> = OptionalFilled<GenericValue>;
type Either = Right | Left;
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
 * 	// type: E.OptionalFilled<"value">
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isOptionalFilled
 * 
 * @namespace E
 * 
 */
/**
 * Builds an Right<"optional"> when the value is defined.
 * 
 * Signature: `optionalFilled(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.optionalFilled("value");
 * 
 * // type: E.OptionalFilled<"value">
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
 * // type: E.OptionalEmpty | "Value"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsOptionalFilled
 * 
 * @namespace E
 * 
 */
export declare function optionalFilled<const GenericValue extends unknown>(value: GenericValue): OptionalFilled<GenericValue>;
export declare function isOptionalFilled<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, OptionalFilled>;
type ToOptionalEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof optional<GenericValue>>;
export declare function whenIsOptionalFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<BreakGenericLink<GenericInput>>, OptionalFilled>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToOptionalEither<BreakGenericLink<GenericInput>>, OptionalFilled>;
export declare function whenIsOptionalFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToOptionalEither<BreakGenericLink<GenericInput>>, OptionalFilled>>) => GenericOutput): GenericOutput | Exclude<ToOptionalEither<GenericInput>, OptionalFilled>;
export {};
