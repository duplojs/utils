import { type EscapeVoid, type AnyValue, type Unwrap, type BreakGenericLink } from "../../common";
import { type Kind } from "../../common/kind";
import { boolKind } from "./base";
import { type Left } from "../left";
import { type Right } from "../right";
import { bool } from "./create";
export declare const boolTruthyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/bool-truthy", unknown>>;
/**
 * @deprecated use boolTruthyKind
 */
export declare const eitherBoolTruthyKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsEither/bool-truthy", unknown>>;
type _BoolTruthy<GenericValue extends unknown = unknown> = (Right<"bool", GenericValue> & Kind<typeof boolKind.definition> & Kind<typeof boolTruthyKind.definition>);
export interface BoolTruthy<GenericValue extends unknown = unknown> extends _BoolTruthy<GenericValue> {
}
/**
 * @deprecated use BoolTruthy
 */
export type EitherBoolTruthy<GenericValue extends unknown = unknown> = BoolTruthy<GenericValue>;
/**
 * Forces the creation of an Right<"bool"> by explicitly marking a truthy value.
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
 * // type: string | E.BoolTruthy<`${string}@${string}`>
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
 * 	// type: E.BoolTruthy<true>
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/isBoolTruthy
 * 
 * @namespace E
 * 
 */
/**
 * Callback executed only for BoolTruthy values. Otherwise, the initial value is returned.
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
 * // type: E.BoolFalsy<null> | "VALUE"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsBoolTruthy
 * 
 * @namespace E
 * 
 */
export declare function boolTruthy<const GenericValue extends unknown>(value: GenericValue): BoolTruthy<GenericValue>;
type Either = Right | Left;
export declare function isBoolTruthy<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, BoolTruthy>;
type ToEither<GenericValue extends unknown> = GenericValue extends Either ? GenericValue : ReturnType<typeof bool<GenericValue>>;
export declare function whenIsBoolTruthy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, BoolTruthy>>) => GenericOutput): (input: GenericInput) => GenericOutput | Exclude<ToEither<BreakGenericLink<GenericInput>>, BoolTruthy>;
export declare function whenIsBoolTruthy<const GenericInput extends unknown, const GenericOutput extends AnyValue | EscapeVoid>(input: GenericInput, theFunction: (eitherValue: Unwrap<Extract<ToEither<BreakGenericLink<GenericInput>>, BoolTruthy>>) => GenericOutput): GenericOutput | Exclude<ToEither<GenericInput>, BoolTruthy>;
export {};
