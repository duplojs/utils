import { createAsyncRetry, useAsyncRetry, equal } from "@scripts";

// direct call
const result = await useAsyncRetry(
	() => Promise.resolve("test"),
	equal("test"),
	{
		maxRetry: 5,
		timeToSleep: 0,
	},
); // type: string

// prepared function
const prepareAsyncRetryFunction = createAsyncRetry(
	(input: string) => Promise.resolve(input),
	equal("test"),
	{
		maxRetry: 5,
		timeToSleep: 0,
	},
); // type: (input: string) => Promise<string>
