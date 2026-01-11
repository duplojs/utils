import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink, type FalsyValue } from "../../common";
import { type Kind } from "../../common/kind";
import { eitherBoolKind } from "./base";
import { bool } from "./create";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
export declare const eitherBoolFalsyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/bool-falsy", unknown>>;
type _EitherBoolFalsy<GenericValue extends FalsyValue = FalsyValue> = (EitherLeft<"bool", GenericValue> & Kind<typeof eitherBoolKind.definition> & Kind<typeof eitherBoolFalsyKind.definition>);
export interface EitherBoolFalsy<GenericValue extends FalsyValue = FalsyValue> extends _EitherBoolFalsy<GenericValue> {
}
/**
 * Builds an EitherLeft<"bool"> for an explicitly falsy value (0, "", null, undefined, false).
 * 
 * Signature: `boolFalsy(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "word" as string;
 * 
 * const result = pipe(
 * 	input,
 * 	when(
 * 		equal(""),
 * 		E.boolFalsy,
 * 	),
 * );
 * 
 * // type: string | E.EitherBoolFalsy<"">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/boolFalsy
 * 
 * @namespace E
 * 
 */
/**
 * Type guard that detects an EitherBoolFalsy.
 * 
 * Signature: `isBoolFalsy(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeInput = E.bool(true ? true : null);
 * 
 * if (E.isBoolFalsy(maybeInput)) {
 * 	// type: E.EitherBoolFalsy<null>
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isBoolFalsy
 * 
 * @namespace E
 * 
 */
/**
 * Applies a callback only when the boolean value is falsy.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsBoolFalsy(input, theFunction)` → returns a value
 * - Curried: `whenIsBoolFalsy(theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * const result = pipe(
 * 	E.bool(true ? "value" : null),
 * 	E.whenIsBoolFalsy(() => "falsy"),
 * );
 * 
 * // type: E.EitherBoolTruthy<"value"> | "falsy"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsBoolFalsy
 * 
 * @namespace E
 * 
 */
export declare function boolFalsy<const GenericValue extends FalsyValue = undefined>(value?: GenericValue): EitherBoolFalsy<GenericValue>;
type Either = EitherRight | EitherLeft;
export declare function isBoolFalsy<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherBoolFalsy>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof bool<GenericValue>>;
export declare function whenIsBoolFalsy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherBoolFalsy>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherBoolFalsy>;
export declare function whenIsBoolFalsy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherBoolFalsy>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
export {};
