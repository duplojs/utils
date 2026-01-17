import type { Kind, EscapeVoid } from "../common";
import { type EitherLeft } from "./left";
import { type EitherRight } from "./right";
export declare const eitherCallbackErrorKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsEither/callback-error", unknown>>;
export declare const eitherCallbackSuccessKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsEither/callback-success", unknown>>;
type _EitherCallbackError = (EitherLeft<"callback", unknown> & Kind<typeof eitherCallbackErrorKind.definition>);
type _EitherCallbackSuccess<GenericValue extends unknown> = (EitherRight<"callback", GenericValue> & Kind<typeof eitherCallbackSuccessKind.definition>);
export interface EitherCallbackError extends _EitherCallbackError {
}
export interface EitherCallbackSuccess<GenericValue extends unknown> extends _EitherCallbackSuccess<GenericValue> {
}
export declare function callbackError(value: unknown): EitherCallbackError;
export declare function callbackSuccess<GenericValue extends unknown>(value: GenericValue): EitherCallbackSuccess<GenericValue>;
type Either = EitherRight | EitherLeft;
type ComputeSafeCallbackResult<GenericOutput extends unknown> = GenericOutput extends Either ? GenericOutput : GenericOutput extends EscapeVoid ? EitherCallbackSuccess<undefined> : EitherCallbackSuccess<GenericOutput>;
/**
 * Runs a callback in a safe block. If the callback throws, the function returns a "callback" typed EitherLeft instead of propagating the exception.
 * If the callback returns an Either, it is returned as-is; otherwise the value is wrapped in an EitherRight.
 * 
 * Signature: `safeCallback(theFunction)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const success = E.safeCallback(() => 42);
 * // E.EitherCallbackError | E.EitherCallbackSuccess<number>
 * 
 * const failure = E.safeCallback(() => {
 * 	throw new Error("boom");
 * });
 * 
 * const isFailure = E.isLeft(failure);
 * 
 * const eitherResult = E.safeCallback(
 * 	() => E.left("example", "already"),
 * );
 * 
 * const isEitherLeft = E.isLeft(eitherResult);
 * ```
 * 
 * @remarks
 * - Catches exceptions thrown by the callback and wraps them in an `EitherLeft<"callback">`
 * - Keeps an `EitherLeft` or `EitherRight` returned by the callback untouched
 * - Useful for working in an unsafe environment (3rd party libraries, user code, etc.)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/safeCallback
 * 
 * @namespace E
 * 
 */
export declare function safeCallback<GenericOutput extends unknown>(theFunction: () => GenericOutput): ComputeSafeCallbackResult<GenericOutput> | EitherCallbackError;
export {};
