import { type MaybePromise } from "./types";
export interface MemoizedPromise<GenericValue extends unknown> {
    readonly value: MaybePromise<GenericValue>;
}
/**
 * The memoPromise() function lazily evaluates a function that returns a value or a promise, then memoizes the resolved result.
 * 
 * Signature: `memoPromise(theFunction)` → returns a memoized object
 * 
 * The input function is called only once, and concurrent reads share the same promise.
 * 
 * ```ts
 * const memoizedValue = memoPromise(() => "ready");
 * const first = await memoizedValue.value;
 * // "ready"
 * 
 * const memoizedPromise = memoPromise(() => Promise.resolve("ok"));
 * const okValue = await memoizedPromise.value;
 * // "ok"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/memoPromise
 * 
 */
export declare function memoPromise<GenericOutput extends unknown>(theFunction: () => MaybePromise<GenericOutput>): MemoizedPromise<GenericOutput>;
