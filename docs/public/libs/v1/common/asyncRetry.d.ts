interface CreateAsyncRetryOptions {
    maxRetry: number;
    timeToSleep?: number;
    log?: boolean;
}
export declare function useAsyncRetry<GenericOutput extends unknown>(retryFunction: () => Promise<GenericOutput>, shouldRetry: (result: GenericOutput) => boolean, options: CreateAsyncRetryOptions): Promise<GenericOutput>;
export declare function createAsyncRetry<GenericAnyFunction extends ((...args: any[]) => Promise<any>)>(retryFunction: GenericAnyFunction, checkFunction: (result: Awaited<ReturnType<GenericAnyFunction>>) => boolean, options: CreateAsyncRetryOptions): GenericAnyFunction;
export {};
