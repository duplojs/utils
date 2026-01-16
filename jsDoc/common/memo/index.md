The memo() function evaluates a function only once then memorizes the result. Subsequent calls return the same value without recalculation.

Signature: `memo(theFunction)` → returns a value

The input value is not mutated.

```ts
{@include common/memo/example.ts[3,12]}
```

@see https://utils.duplojs.dev/en/v1/api/common/memo
