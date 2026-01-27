import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink, type FalsyValue } from "../../common";
import { type Kind } from "../../common/kind";
import { boolKind } from "./base";
import { bool } from "./create";
import { type Left } from "../left";
import { type Right } from "../right";
export declare const boolFalsyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/bool-falsy", unknown>>;
/**
 * @deprecated use boolFalsyKind
 */
export declare const eitherBoolFalsyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/bool-falsy", unknown>>;
type _BoolFalsy<GenericValue extends FalsyValue = FalsyValue> = (Left<"bool", GenericValue> & Kind<typeof boolKind.definition> & Kind<typeof boolFalsyKind.definition>);
export interface BoolFalsy<GenericValue extends FalsyValue = FalsyValue> extends _BoolFalsy<GenericValue> {
}
/**
 * @deprecated use BoolFalsy
 */
export type EitherBoolFalsy<GenericValue extends FalsyValue = FalsyValue> = BoolFalsy<GenericValue>;
/**
 * Builds an Left<"bool"> for an explicitly falsy value (0, "", null, undefined, false).
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
 * // type: string | E.BoolFalsy<"">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/boolFalsy
 * 
 * @namespace E
 * 
 */
/**
 * Type guard that detects an BoolFalsy.
 * 
 * Signature: `isBoolFalsy(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeInput = E.bool(true ? true : null);
 * 
 * if (E.isBoolFalsy(maybeInput)) {
 * 	// type: E.BoolFalsy<null>
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
 * // type: E.BoolTruthy<"value"> | "falsy"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsBoolFalsy
 * 
 * @namespace E
 * 
 */
export declare function boolFalsy<const GenericValue extends FalsyValue = undefined>(value?: GenericValue): BoolFalsy<GenericValue>;
type Either = Right | Left;
export declare function isBoolFalsy<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, BoolFalsy>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof bool<GenericValue>>;
export declare function whenIsBoolFalsy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, BoolFalsy>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, BoolFalsy>;
export declare function whenIsBoolFalsy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, BoolFalsy>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, BoolFalsy>;
export {};
