import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { type Left } from "../left";
import { type Right } from "../right";
import { nullish } from "./create";
import { nullishKind } from "./base";
export type NullishValue = null | undefined;
export declare const nullishEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullish-empty", unknown>>;
/**
 * @deprecated use nullishEmptyKind
 */
export declare const eitherNullishEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullish-empty", unknown>>;
type _NullishEmpty<GenericValue extends NullishValue = NullishValue> = (Left<"nullish", GenericValue> & Kind<typeof nullishKind.definition> & Kind<typeof nullishEmptyKind.definition>);
export interface NullishEmpty<GenericValue extends NullishValue = NullishValue> extends _NullishEmpty<GenericValue> {
}
/**
 * @deprecated use NullishEmpty
 */
export type EitherNullishEmpty<GenericValue extends NullishValue = NullishValue> = NullishEmpty<GenericValue>;
/**
 * Type guard detecting an NullishEmpty.
 * 
 * Signature: `isNullishEmpty(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeValue = E.nullish(true ? "value" : null);
 * 
 * if (E.isNullishEmpty(maybeValue)) {
 * 	// type: E.NullishEmpty<null>
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isNullishEmpty
 * 
 * @namespace E
 * 
 */
/**
 * Explicitly builds an Left<"nullish"> with null or undefined.
 * 
 * Signature: `nullishEmpty(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.nullishEmpty();
 * 
 * // type: E.NullishEmpty<undefined>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/nullishEmpty
 * 
 * @namespace E
 * 
 */
/**
 * Applies a callback only when the Either is NullishEmpty.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsNullishEmpty(input, theFunction)` → returns a value
 * - Curried: `whenIsNullishEmpty(theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * const result = pipe(
 * 	E.nullish(true ? "value" : null),
 * 	E.whenIsNullishEmpty(() => "nullish"),
 * );
 * 
 * // type: "nullish" | E.NullishFilled<"value">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsNullishEmpty
 * 
 * @namespace E
 * 
 */
export declare function nullishEmpty<const GenericValue extends NullishValue = undefined>(value?: GenericValue): NullishEmpty<GenericValue>;
type Either = Right | Left;
export declare function isNullishEmpty<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, NullishEmpty>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullish<GenericValue>>;
export declare function whenIsNullishEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullishEmpty>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, NullishEmpty>;
export declare function whenIsNullishEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullishEmpty>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, NullishEmpty>;
export {};
