import { type Right } from "../right";
import { type Left } from "../left";
import { nullish } from "./create";
import { type Kind } from "../../common/kind";
import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { nullishKind } from "./base";
export declare const nullishFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullish-filled", unknown>>;
/**
 * @deprecated use nullishFilledKind
 */
export declare const eitherNullishFilledKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/nullish-filled", unknown>>;
type _NullishFilled<GenericValue extends unknown = unknown> = (Right<"nullish", GenericValue> & Kind<typeof nullishKind.definition> & Kind<typeof nullishFilledKind.definition>);
export interface NullishFilled<GenericValue extends unknown = unknown> extends _NullishFilled<GenericValue> {
}
/**
 * @deprecated use NullishFilled
 */
export type EitherNullishFilled<GenericValue extends unknown = unknown> = NullishFilled<GenericValue>;
/**
 * Type guard that detects an NullishFilled.
 * 
 * Signature: `isNullishFilled(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeValue = E.nullish(true ? "value" : null);
 * 
 * if (E.isNullishFilled(maybeValue)) {
 * 	// type: E.NullishFilled<"value">
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isNullishFilled
 * 
 * @namespace E
 * 
 */
/**
 * Builds an Right<"nullish"> with a non-null/non-undefined value.
 * 
 * Signature: `nullishFilled(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.nullishFilled("string");
 * 
 * // type: E.NullishFilled<"string">
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
 * // type: E.NullishEmpty<null> | "VALUE"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsNullishFilled
 * 
 * @namespace E
 * 
 */
export declare function nullishFilled<const GenericValue extends unknown>(value: GenericValue): NullishFilled<GenericValue>;
type Either = Right | Left;
export declare function isNullishFilled<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, NullishFilled>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof nullish<GenericValue>>;
export declare function whenIsNullishFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullishFilled>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, NullishFilled>;
export declare function whenIsNullishFilled<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, NullishFilled>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, NullishFilled>;
export {};
