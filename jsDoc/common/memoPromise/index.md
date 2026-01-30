The memoPromise() function lazily evaluates a function that returns a value or a promise, then memoizes the resolved result.

Signature: `memoPromise(theFunction)` → returns a memoized object

The input function is called only once, and concurrent reads share the same promise.

```ts
{@include common/memoPromise/example.ts[3,9]}
```

@see https://utils.duplojs.dev/en/v1/api/common/memoPromise
