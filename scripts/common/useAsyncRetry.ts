import { sleep } from "./sleep";

interface CreateAsyncRetryOptions {
	maxRetry: number;
	timeToSleep?: number;
	log?: boolean;
}

export async function useAsyncRetry<
	GenericOutput extends unknown,
>(
	retryFunction: () => Promise<GenericOutput>,
	shouldRetry: (result: GenericOutput) => boolean,
	options: CreateAsyncRetryOptions,
): Promise<GenericOutput> {
	for (let currentDeep = 0; true; currentDeep++) {
		const result = await retryFunction();

		if (
			currentDeep >= options.maxRetry
			|| !shouldRetry(result)
		) {
			return result;
		}

		if (options.log) {
			console.log(`useAsyncRetry: attempt ${currentDeep} failed, starting new attempt.`);
		}

		if (options.timeToSleep) {
			await sleep(options.timeToSleep);
		}
	}
}

export function createAsyncRetry<
	GenericAnyFunction extends((...args: unknown[]) => Promise<any>),
>(
	retryFunction: GenericAnyFunction,
	checkFunction: (result: Awaited<ReturnType<GenericAnyFunction>>) => boolean,
	options: CreateAsyncRetryOptions,
): GenericAnyFunction {
	return (
		(...args) => useAsyncRetry(
			() => retryFunction(...args),
			checkFunction,
			options,
		)
	) as GenericAnyFunction;
}
