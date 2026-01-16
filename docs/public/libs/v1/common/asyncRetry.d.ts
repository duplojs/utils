interface CreateAsyncRetryOptions {
    maxRetry: number;
    timeToSleep?: number;
    log?: boolean;
}
/**
 * The helpers useAsyncRetry() and createAsyncRetry() rerun an async function as long as a retry criterion is true, with options for attempts, delay, and logging.
 * 
 * Signature: `useAsyncRetry(retryFunction, shouldRetry, options)` and `createAsyncRetry(retryFunction, checkFunction, options)` → returns a value
 * 
 * ```ts
 * // direct call
 * const result = await useAsyncRetry(
 * 	() => Promise.resolve("test"),
 * 	equal("test"),
 * 	{
 * 		maxRetry: 5,
 * 		timeToSleep: 0,
 * 	},
 * ); // type: string
 * 
 * // prepared function
 * const prepareAsyncRetryFunction = createAsyncRetry(
 * 	(input: string) => Promise.resolve(input),
 * 	equal("test"),
 * 	{
 * 		maxRetry: 5,
 * 		timeToSleep: 0,
 * 	},
 * ); // type: (input: string) => Promise<string>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/asyncRetry
 * 
 */
export declare function useAsyncRetry<GenericOutput extends unknown>(retryFunction: () => Promise<GenericOutput>, shouldRetry: (result: GenericOutput) => boolean, options: CreateAsyncRetryOptions): Promise<GenericOutput>;
/**
 * The helpers useAsyncRetry() and createAsyncRetry() rerun an async function as long as a retry criterion is true, with options for attempts, delay, and logging.
 * 
 * Signature: `useAsyncRetry(retryFunction, shouldRetry, options)` and `createAsyncRetry(retryFunction, checkFunction, options)` → returns a value
 * 
 * ```ts
 * // direct call
 * const result = await useAsyncRetry(
 * 	() => Promise.resolve("test"),
 * 	equal("test"),
 * 	{
 * 		maxRetry: 5,
 * 		timeToSleep: 0,
 * 	},
 * ); // type: string
 * 
 * // prepared function
 * const prepareAsyncRetryFunction = createAsyncRetry(
 * 	(input: string) => Promise.resolve(input),
 * 	equal("test"),
 * 	{
 * 		maxRetry: 5,
 * 		timeToSleep: 0,
 * 	},
 * ); // type: (input: string) => Promise<string>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/asyncRetry
 * 
 */
export declare function createAsyncRetry<GenericAnyFunction extends ((...args: any[]) => Promise<any>)>(retryFunction: GenericAnyFunction, checkFunction: (result: Awaited<ReturnType<GenericAnyFunction>>) => boolean, options: CreateAsyncRetryOptions): GenericAnyFunction;
export {};
