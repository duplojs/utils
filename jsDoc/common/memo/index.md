The memo() function evaluates a function only once then memorizes the result. The first access to `value` triggers the evaluation.

Signature: `memo(theFunction)` → returns a memoized object

The input function is called only once.

```ts
{@include common/memo/example.ts[3,12]}
```

@see https://utils.duplojs.dev/en/v1/api/common/memo
