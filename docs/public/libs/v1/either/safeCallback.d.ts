import { type Left } from "./left";
import { type Right } from "./right";
export type SafeCallbackSuccess<GenericValue extends unknown> = Right<"safe-callback-success", GenericValue>;
export type SafeCallbackError = Left<"safe-callback-error", unknown>;
type Either = Right | Left;
type ComputeSafeCallbackResult<GenericOutput extends unknown> = ((GenericOutput extends Either ? GenericOutput : GenericOutput extends Promise<infer InferredValue> ? Promise<ComputeSafeCallbackResult<InferredValue>> : SafeCallbackSuccess<GenericOutput>) | SafeCallbackError);
/**
 * Runs a callback in a safe block. If the callback throws or returns a rejected promise, the function returns a "safe-callback-error" typed Left instead of propagating the error.
 * If the callback returns an Either, it is returned as-is; otherwise the value is wrapped in a Right. Promise results are handled the same way after resolution.
 * 
 * Signature: `safeCallback(theFunction)` → returns a value or promise
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const success = E.safeCallback(() => 42);
 * // E.SafeCallbackSuccess<number> | E.SafeCallbackError
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
 * 
 * const asyncSuccess = E.safeCallback(
 * 	() => Promise.resolve("done"),
 * );
 * // Promise<E.SafeCallbackSuccess<string> | E.SafeCallbackError> | E.SafeCallbackError
 * 
 * const asyncFailure = E.safeCallback(
 * 	() => Promise.reject(new Error("boom")),
 * );
 * ```
 * 
 * @remarks
 * - Catches exceptions thrown by the callback and rejected promises, then wraps them in a `Left<"safe-callback-error">`
 * - Keeps an `Left` or `Right` returned by the callback untouched
 * - Wraps successful non-Either values in a `Right<"safe-callback-success">`
 * - Useful for working in an unsafe environment (3rd party libraries, user code, etc.)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/safeCallback
 * 
 * @namespace E
 * 
 */
export declare function safeCallback<const GenericOutput extends unknown>(theFunction: () => GenericOutput): Extract<ComputeSafeCallbackResult<GenericOutput>, any>;
export {};
