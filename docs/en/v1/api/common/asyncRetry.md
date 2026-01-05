---
outline: [2, 3]
description: "The helpers useAsyncRetry() and createAsyncRetry() rerun an async function as long as a retry criterion is true, with options for attempts, delay, and logging."
prev:
  text: "promiseObject"
  link: "/en/v1/api/common/promiseObject"
next:
  text: "sleep"
  link: "/en/v1/api/common/sleep"
---

# asyncRetry

The helpers **`useAsyncRetry()`** and **`createAsyncRetry()`** rerun an async function as long as a retry criterion is true, with options for attempts, delay, and logging.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/asyncRetry/tryout.doc.ts"
  majorVersion="v1"
  height="600px"
  :foldLines="[12, 28]"
/>

## Syntax

```typescript
interface CreateAsyncRetryOptions {
	maxRetry: number;
	timeToSleep?: number;
	log?: boolean;
}

function useAsyncRetry<
	GenericOutput extends unknown
>(
	retryFunction: () => Promise<GenericOutput>,
	shouldRetry: (result: GenericOutput) => boolean,
	options: CreateAsyncRetryOptions
): Promise<GenericOutput>;

function createAsyncRetry<
	GenericAnyFunction extends ((...args: any[]) => Promise<any>)
>(
	retryFunction: GenericAnyFunction,
	checkFunction: (result: Awaited<ReturnType<GenericAnyFunction>>) => boolean,
	options: CreateAsyncRetryOptions
): GenericAnyFunction;
```

## Parameters

- `retryFunction` : Async function to retry.
- `shouldRetry` / `checkFunction` : Decides whether another attempt is needed from the previous result.
- `options` : Retry options (`maxRetry`, `timeToSleep`, `log`).

## Return value

- `useAsyncRetry` : A promise resolved with the last result (after success or exhaustion of retries).
- `createAsyncRetry` : A decorated function that applies retry logic on each call.

## See also

- [`sleep`](/en/v1/api/common/sleep) - Async pause used in some retry scenarios
