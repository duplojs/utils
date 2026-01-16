The helpers useAsyncRetry() and createAsyncRetry() rerun an async function as long as a retry criterion is true, with options for attempts, delay, and logging.

Signature: `useAsyncRetry(retryFunction, shouldRetry, options)` and `createAsyncRetry(retryFunction, checkFunction, options)` → returns a value

```ts
{@include common/asyncRetry/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/common/asyncRetry
