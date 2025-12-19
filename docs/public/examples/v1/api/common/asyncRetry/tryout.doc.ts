import { createAsyncRetry, useAsyncRetry, equal, type ExpectType } from "@duplojs/utils";

// direct call
const result = await useAsyncRetry(
	() => Promise.resolve("test"),
	equal("test"),
	{
		maxRetry: 5,
		timeToSleep: 0,
	},
);

type check1 = ExpectType<
	typeof result,
	string,
	"strict"
>;

// prepared function
const prepareAsyncRetryFunction = createAsyncRetry(
	(input: string) => Promise.resolve(input),
	equal("test"),
	{
		maxRetry: 5,
		timeToSleep: 0,
	},
);

type check2 = ExpectType<
	typeof prepareAsyncRetryFunction,
	(input: string) => Promise<string>,
	"strict"
>;
