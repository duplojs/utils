import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { type Left } from "../left";
import { type Right } from "../right";
import { nullable } from "./create";
import { nullableKind } from "./base";
export declare const nullableFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullable-filled", unknown>>;
/**
 * @deprecated use nullableFilledKind
 */
export declare const eitherNullableFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullable-filled", unknown>>;
type _NullableFilled<GenericValue extends unknown = unknown> = (Right<"nullable", GenericValue> & Kind<typeof nullableKind.definition> & Kind<typeof nullableFilledKind.definition>);
export interface NullableFilled<GenericValue extends unknown = unknown> extends _NullableFilled<GenericValue> {
}
/**
 * @deprecated use NullableFilled
 */
export type EitherNullableFilled<GenericValue extends unknown = unknown> = NullableFilled<GenericValue>;
type Either = Right | Left;
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
 * 	// type: E.NullableFilled<"value">
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isNullableFilled
 * 
 * @namespace E
 * 
 */
/**
 * Builds an Right<"nullable"> for a non-null value.
 * 
 * Signature: `nullableFilled(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.nullableFilled("value");
 * 
 * // type: E.NullableFilled<"value">
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
 * // type: E.NullableEmpty | "Value"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsNullableFilled
 * 
 * @namespace E
 * 
 */
export declare function nullableFilled<const GenericValue extends unknown>(value: GenericValue): NullableFilled<GenericValue>;
export declare function isNullableFilled<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, NullableFilled>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullable<GenericValue>>;
export declare function whenIsNullableFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullableFilled>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, NullableFilled>;
export declare function whenIsNullableFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullableFilled>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, NullableFilled>;
export {};
