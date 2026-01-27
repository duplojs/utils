import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { type Left } from "../left";
import { type Right } from "../right";
import { nullable } from "./create";
import { nullableKind } from "./base";
export declare const nullableEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullable-empty", unknown>>;
/**
 * @deprecated use nullableEmptyKind
 */
export declare const eitherNullableEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullable-empty", unknown>>;
type _NullableEmpty = (Left<"nullable", null> & Kind<typeof nullableKind.definition> & Kind<typeof nullableEmptyKind.definition>);
export interface NullableEmpty extends _NullableEmpty {
}
/**
 * @deprecated use NullableEmpty
 */
export type EitherNullableEmpty = NullableEmpty;
type Either = Right | Left;
/**
 * Type guard that detects an NullableEmpty.
 * 
 * Signature: `isNullableEmpty(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeValue = E.nullable(true ? "value" : null);
 * 
 * if (E.isNullableEmpty(maybeValue)) {
 * 	// type: E.NullableEmpty
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isNullableEmpty
 * 
 * @namespace E
 * 
 */
/**
 * Explicitly builds an Left<"nullable"> containing null.
 * 
 * Signature: `nullableEmpty()` → returns a value
 * 
 * ```ts
 * const result = E.nullableEmpty();
 * 
 * // type: E.NullableEmpty
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/nullableEmpty
 * 
 * @namespace E
 * 
 */
/**
 * Executes a callback only when the Either is NullableEmpty.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsNullableEmpty(input, theFunction)` → returns a value
 * - Curried: `whenIsNullableEmpty(theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * const result = pipe(
 * 	E.nullable(true ? "value" : null),
 * 	E.whenIsNullableEmpty(() => "nullable"),
 * );
 * 
 * // type: "nullable" | E.NullableFilled<"value">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsNullableEmpty
 * 
 * @namespace E
 * 
 */
export declare function nullableEmpty(): NullableEmpty;
export declare function isNullableEmpty<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, NullableEmpty>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullable<GenericValue>>;
export declare function whenIsNullableEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullableEmpty>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, NullableEmpty>;
export declare function whenIsNullableEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullableEmpty>>) => GenericOutput): GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, NullableEmpty>;
export {};
