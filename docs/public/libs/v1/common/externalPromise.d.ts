/**
 * The createExternalPromise() function creates a promise controllable from the outside: it exposes resolve, reject, and the associated promise.
 * 
 * Signature: `createExternalPromise()` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const { promise, resolve } = createExternalPromise<number>();
 * resolve(42);
 * 
 * const result = await promise;
 * // result: 42
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/externalPromise
 * 
 * @namespace C
 * 
 */
export declare function createExternalPromise<GenericPromiseValue extends unknown>(): {
    resolve: (_value: GenericPromiseValue | Awaited<GenericPromiseValue> | Promise<GenericPromiseValue>) => void;
    reject: (_value: unknown) => void;
    promise: Promise<Awaited<GenericPromiseValue>>;
};
