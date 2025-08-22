import { sleep } from "./sleep";
import { type AnyValue } from "./types/anyValue";

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
	for (let currentTry = 1; true; currentTry++) {
		const result = await retryFunction();

		if (
			currentTry >= options.maxRetry
			|| !shouldRetry(result)
		) {
			return result;
		}

		if (options.log) {
			console.log(`useAsyncRetry: attempt ${currentTry} failed, starting new attempt.`);
		}

		if (options.timeToSleep) {
			await sleep(options.timeToSleep);
		}
	}
}

export function createAsyncRetry<
	GenericAnyFunction extends((...args: any[]) => Promise<any>),
>(
	retryFunction: GenericAnyFunction,
	checkFunction: (result: Awaited<ReturnType<GenericAnyFunction>>) => boolean,
	options: CreateAsyncRetryOptions,
): GenericAnyFunction {
	return (
		(...args) => useAsyncRetry(
			() => retryFunction(...args as never[]),
			checkFunction,
			options,
		)
	) as GenericAnyFunction;
}
