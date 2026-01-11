import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
import { nullable } from "./create";
import { eitherNullableKind } from "./base";
export declare const eitherNullableFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullable-filled", unknown>>;
type _EitherNullableFilled<GenericValue extends unknown = unknown> = (EitherRight<"nullable", GenericValue> & Kind<typeof eitherNullableKind.definition> & Kind<typeof eitherNullableFilledKind.definition>);
export interface EitherNullableFilled<GenericValue extends unknown = unknown> extends _EitherNullableFilled<GenericValue> {
}
type Either = EitherRight | EitherLeft;
/**
 * Type guard that checks that the nullable Either actually contains a value.
 * 
 * Signature: `isNullableFilled(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeValue = E.nullable(true ? "value" : null);
 * 
 * if (E.isNullableFilled(maybeValue)) {
 * 	// type: E.EitherNullableFilled<"value">
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isNullableFilled
 * 
 * @namespace E
 * 
 */
/**
 * Builds an EitherRight<"nullable"> for a non-null value.
 * 
 * Signature: `nullableFilled(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.nullableFilled("value");
 * 
 * // type: E.EitherNullableFilled<"value">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/nullableFilled
 * 
 * @namespace E
 * 
 */
/**
 * Applies a function only when the nullable Either contains a value (NullableFilled).
 * 
 * **Supported call styles:**
 * - Classic: `whenIsNullableFilled(input, theFunction)` → returns a value
 * - Curried: `whenIsNullableFilled(theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * const result = pipe(
 * 	E.nullable(true ? "value" : null),
 * 	E.whenIsNullableFilled(S.capitalize),
 * );
 * 
 * // type: E.EitherNullableEmpty | "Value"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsNullableFilled
 * 
 * @namespace E
 * 
 */
export declare function nullableFilled<const GenericValue extends unknown>(value: GenericValue): EitherNullableFilled<GenericValue>;
export declare function isNullableFilled<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherNullableFilled>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullable<GenericValue>>;
export declare function whenIsNullableFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherNullableFilled>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullableFilled>;
export declare function whenIsNullableFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherNullableFilled>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
export {};
