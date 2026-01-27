import type { Kind, EscapeVoid } from "../common";
import { type Left } from "./left";
import { type Right } from "./right";
export declare const callbackErrorKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsEither/callback-error", unknown>>;
/**
 * @deprecated use callbackErrorKind
 */
export declare const eitherCallbackErrorKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsEither/callback-error", unknown>>;
export declare const callbackSuccessKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsEither/callback-success", unknown>>;
/**
 * @deprecated use callbackSuccessKind
 */
export declare const eitherCallbackSuccessKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsEither/callback-success", unknown>>;
type _CallbackError = (Left<"callback", unknown> & Kind<typeof callbackErrorKind.definition>);
type _CallbackSuccess<GenericValue extends unknown> = (Right<"callback", GenericValue> & Kind<typeof callbackSuccessKind.definition>);
export interface CallbackError extends _CallbackError {
}
export interface CallbackSuccess<GenericValue extends unknown> extends _CallbackSuccess<GenericValue> {
}
/**
 * @deprecated use CallbackError
 */
export type EitherCallbackError = CallbackError;
/**
 * @deprecated use CallbackSuccess
 */
export type EitherCallbackSuccess<GenericValue extends unknown> = CallbackSuccess<GenericValue>;
export declare function callbackError(value: unknown): CallbackError;
export declare function callbackSuccess<GenericValue extends unknown>(value: GenericValue): CallbackSuccess<GenericValue>;
type Either = Right | Left;
type ComputeSafeCallbackResult<GenericOutput extends unknown> = GenericOutput extends Either ? GenericOutput : GenericOutput extends EscapeVoid ? CallbackSuccess<undefined> : CallbackSuccess<GenericOutput>;
/**
 * Runs a callback in a safe block. If the callback throws, the function returns a "callback" typed Left instead of propagating the exception.
 * If the callback returns an Either, it is returned as-is; otherwise the value is wrapped in an Right.
 * 
 * Signature: `safeCallback(theFunction)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const success = E.safeCallback(() => 42);
 * // E.CallbackError | E.CallbackSuccess<number>
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
 * const isLeft = E.isLeft(eitherResult);
 * ```
 * 
 * @remarks
 * - Catches exceptions thrown by the callback and wraps them in an `Left<"callback">`
 * - Keeps an `Left` or `Right` returned by the callback untouched
 * - Useful for working in an unsafe environment (3rd party libraries, user code, etc.)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/safeCallback
 * 
 * @namespace E
 * 
 */
export declare function safeCallback<GenericOutput extends unknown>(theFunction: () => GenericOutput): ComputeSafeCallbackResult<GenericOutput> | CallbackError;
export {};
