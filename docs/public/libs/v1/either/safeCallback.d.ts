import { type Kind } from "../common";
import { type EitherLeft } from "./left";
export declare const eitherCallbackErrorKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsEither/callback-error", unknown>>;
type _EitherCallbackError = (EitherLeft<"callback", unknown> & Kind<typeof eitherCallbackErrorKind.definition>);
export interface EitherCallbackError extends _EitherCallbackError {
}
/**
 * Runs a callback in a safe block. If the callback throws, the function returns a "callback" typed EitherLeft instead of propagating the exception.
 * 
 * Signature: `safeCallback(theFunction)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const success = E.safeCallback(() => 42);
 * 
 * const failure = E.safeCallback(() => {
 * 	throw new Error("boom");
 * });
 * 
 * const isFailure = E.isLeft(failure);
 * ```
 * 
 * @remarks
 * - Catches exceptions thrown by the callback and wraps them in an `EitherLeft<"callback">`
 * - Useful for working in an unsafe environment (3rd party libraries, user code, etc.)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/safeCallback
 * 
 * @namespace E
 * 
 */
export declare function callbackError(value: unknown): EitherCallbackError;
export declare function safeCallback<GenericOutput extends unknown>(theFunction: () => GenericOutput): GenericOutput | EitherCallbackError;
export {};
