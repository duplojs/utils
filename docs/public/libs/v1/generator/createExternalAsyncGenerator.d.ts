/**
 * Creates an externally controlled async generator that emits at most one value.
 * 
 * Signature: `createExternalAsyncGenerator()` -> returns `{ asyncGenerator, next, exit }`
 * 
 * Use `next(value)` to resolve the pending iteration with a value, or `exit()` to stop it without yielding.
 * 
 * ```ts
 * const first = G.createExternalAsyncGenerator<number>();
 * const firstPending = first.asyncGenerator.next();
 * first.next(42);
 * const firstResult = await firstPending;
 * // firstResult: { done: false, value: 42 }
 * 
 * const second = G.createExternalAsyncGenerator<string>();
 * const secondPending = second.asyncGenerator.next();
 * second.exit();
 * const secondResult = await secondPending;
 * // secondResult: { done: true, value: undefined }
 * 
 * const third = G.createExternalAsyncGenerator<string>();
 * const collected: string[] = [];
 * const consume = (async() => {
 * 	for await (const value of third.asyncGenerator) {
 * 		collected.push(value);
 * 	}
 * })();
 * third.next("hello");
 * await consume;
 * // collected: ["hello"]
 * ```
 * 
 * @remarks
 * - The returned async generator waits for one external resolution.
 * - The first call to `next` or `exit` settles that pending resolution.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/generator/createExternalAsyncGenerator
 * 
 * @namespace G
 * 
 */
export declare function createExternalAsyncGenerator<GenericValue extends unknown>(): {
    asyncGenerator: AsyncGenerator<Awaited<GenericValue>, void, unknown>;
    next: (value: GenericValue) => undefined;
    exit: () => undefined;
};
