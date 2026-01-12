import { type EitherRight } from "../right";
import { type EitherLeft } from "../left";
import { nullish } from "./create";
import { type Kind } from "../../common/kind";
import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { eitherNullishKind } from "./base";
export declare const eitherNullishFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullish-filled", unknown>>;
type _EitherNullishFilled<GenericValue extends unknown = unknown> = (EitherRight<"nullish", GenericValue> & Kind<typeof eitherNullishKind.definition> & Kind<typeof eitherNullishFilledKind.definition>);
export interface EitherNullishFilled<GenericValue extends unknown = unknown> extends _EitherNullishFilled<GenericValue> {
}
/**
 * Type guard that detects an EitherNullishFilled.
 * 
 * Signature: `isNullishFilled(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeValue = E.nullish(true ? "value" : null);
 * 
 * if (E.isNullishFilled(maybeValue)) {
 * 	// type: E.EitherNullishFilled<"value">
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isNullishFilled
 * 
 * @namespace E
 * 
 */
/**
 * Builds an EitherRight<"nullish"> with a non-null/non-undefined value.
 * 
 * Signature: `nullishFilled(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.nullishFilled("string");
 * 
 * // type: E.EitherNullishFilled<"string">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/nullishFilled
 * 
 * @namespace E
 * 
 */
/**
 * Executes a callback only when the Either contains a defined value (NullishFilled).
 * 
 * **Supported call styles:**
 * - Classic: `whenIsNullishFilled(input, theFunction)` → returns a value
 * - Curried: `whenIsNullishFilled(theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * const result = pipe(
 * 	E.nullish(true ? "value" : null),
 * 	E.whenIsNullishFilled(S.toUpperCase),
 * );
 * 
 * // type: E.EitherNullishEmpty<null> | "VALUE"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsNullishFilled
 * 
 * @namespace E
 * 
 */
export declare function nullishFilled<const GenericValue extends unknown>(value: GenericValue): EitherNullishFilled<GenericValue>;
type Either = EitherRight | EitherLeft;
export declare function isNullishFilled<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherNullishFilled>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullish<GenericValue>>;
export declare function whenIsNullishFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherNullishFilled>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherNullishFilled>;
export declare function whenIsNullishFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherNullishFilled>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
export {};
