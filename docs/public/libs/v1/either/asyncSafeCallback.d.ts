import { type Left } from "./left";
import { type Right } from "./right";
import { type SafeCallbackError, type SafeCallbackSuccess } from "./safeCallback";
type Either = Right | Left;
type ComputeSafeCallbackResult<GenericOutput extends unknown> = Extract<(GenericOutput extends Either ? GenericOutput : GenericOutput extends Promise<infer InferredValue> ? ComputeSafeCallbackResult<InferredValue> : SafeCallbackSuccess<GenericOutput>), any>;
/**
 * Runs a callback or a promise in a safe asynchronous block. If the callback throws or the promise rejects, the function resolves to a "safe-callback-error" typed Left instead of propagating the error.
 * If the callback or promise resolves to an Either, it is returned as-is; otherwise the resolved value is wrapped in a Right.
 * 
 * Signature: `asyncSafeCallback(maybeFunction)` → returns a promise
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const success = await E.asyncSafeCallback(() => 42);
 * // E.SafeCallbackSuccess<number> | E.SafeCallbackError
 * 
 * const failure = await E.asyncSafeCallback(() => {
 * 	throw new Error("boom");
 * });
 * 
 * const isFailure = E.isLeft(failure);
 * 
 * const eitherResult = await E.asyncSafeCallback(
 * 	() => E.left("example", "already"),
 * );
 * 
 * const isLeft = E.isLeft(eitherResult);
 * 
 * const promiseSuccess = await E.asyncSafeCallback(
 * 	Promise.resolve("done"),
 * );
 * 
 * const promiseFailure = await E.asyncSafeCallback(
 * 	Promise.reject(new Error("boom")),
 * );
 * ```
 * 
 * @remarks
 * - Catches exceptions thrown by the callback and rejected promises, then resolves to a `Left<"safe-callback-error">`
 * - Keeps a `Left` or `Right` returned or resolved by the input untouched
 * - Wraps successful non-Either values in a `Right<"safe-callback-success">`
 * - Accepts either a callback or a promise directly
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/asyncSafeCallback
 * 
 * @namespace E
 * 
 */
export declare function asyncSafeCallback<const GenericOutput extends unknown>(maybeFunction: (() => GenericOutput) | Promise<GenericOutput>): Promise<ComputeSafeCallbackResult<GenericOutput> | SafeCallbackError>;
export {};
