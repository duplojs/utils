import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { eitherBoolKind } from "./base";
import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
import { bool } from "./create";
export declare const eitherBoolTruthyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/bool-truthy", unknown>>;
type _EitherBoolTruthy<GenericValue extends unknown = unknown> = (EitherRight<"bool", GenericValue> & Kind<typeof eitherBoolKind.definition> & Kind<typeof eitherBoolTruthyKind.definition>);
export interface EitherBoolTruthy<GenericValue extends unknown = unknown> extends _EitherBoolTruthy<GenericValue> {
}
/**
 * Forces the creation of an EitherRight<"bool"> by explicitly marking a truthy value.
 * 
 * Signature: `boolTruthy(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "hello@duplo.dev" as string;
 * 
 * const result = pipe(
 * 	input,
 * 	when(
 * 		S.includes("@"),
 * 		E.boolTruthy,
 * 	),
 * );
 * 
 * // type: string | E.EitherBoolTruthy<`${string}@${string}`>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/boolTruthy
 * 
 * @namespace E
 * 
 */
/**
 * Type guard that checks whether an Either from the boolean helpers is truthy.
 * 
 * Signature: `isBoolTruthy(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const maybeInput = E.bool(true ? true : null);
 * 
 * if (E.isBoolTruthy(maybeInput)) {
 * 	// type: E.EitherBoolTruthy<true>
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isBoolTruthy
 * 
 * @namespace E
 * 
 */
/**
 * Callback executed only for EitherBoolTruthy values. Otherwise, the initial value is returned.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsBoolTruthy(input, theFunction)` → returns a value
 * - Curried: `whenIsBoolTruthy(theFunction)` → returns a function waiting for the input
 * 
 * If the condition matches, the callback runs; otherwise the original value is returned.
 * 
 * ```ts
 * const result = pipe(
 * 	E.bool(true ? "value" : null),
 * 	E.whenIsBoolTruthy(S.toUpperCase),
 * );
 * 
 * // type: E.EitherBoolFalsy<null> | "VALUE"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsBoolTruthy
 * 
 * @namespace E
 * 
 */
export declare function boolTruthy<const GenericValue extends unknown>(value: GenericValue): EitherBoolTruthy<GenericValue>;
type Either = EitherRight | EitherLeft;
export declare function isBoolTruthy<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, EitherBoolTruthy>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof bool<GenericValue>>;
export declare function whenIsBoolTruthy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherBoolTruthy>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, EitherBoolTruthy>;
export declare function whenIsBoolTruthy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, EitherBoolTruthy>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolTruthy>;
export {};
