import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
import { nullish } from "./create";
import { eitherNullishKind } from "./base";
export type NullishValue = null | undefined;
export declare const eitherNullishEmptyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullish-empty", unknown>>;
type _EitherNullishEmpty<GenericValue extends NullishValue = NullishValue> = (EitherLeft<"nullish", GenericValue> & Kind<typeof eitherNullishKind.definition> & Kind<typeof eitherNullishEmptyKind.definition>);
export interface EitherNullishEmpty<GenericValue extends NullishValue = NullishValue> extends _EitherNullishEmpty<GenericValue> {
}
/**
 * Type guard detecting an EitherNullishEmpty.
 * 
 * Signature: `isNullishEmpty(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeValue = E.nullish(true ? "value" : null);
 * 
 * if (E.isNullishEmpty(maybeValue)) {
 * 	// type: E.EitherNullishEmpty<null>
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isNullishEmpty
 * 
 * @namespace E
 * 
 */
/**
 * Explicitly builds an EitherLeft<"nullish"> with null or undefined.
 * 
 * Signature: `nullishEmpty(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.nullishEmpty();
 * 
 * // type: E.EitherNullishEmpty<undefined>
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
 * // type: "nullish" | E.EitherNullishFilled<"value">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsNullishEmpty
 * 
 * @namespace E
 * 
 */
export declare function nullishEmpty<const GenericValue extends NullishValue = undefined>(value?: GenericValue): EitherNullishEmpty<GenericValue>;
type Either = EitherRight | EitherLeft;
export declare function isNullishEmpty<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherNullishEmpty>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullish<GenericValue>>;
export declare function whenIsNullishEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherNullishEmpty>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullishEmpty>;
export declare function whenIsNullishEmpty<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherNullishEmpty>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
export {};
