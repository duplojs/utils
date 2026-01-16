The asyncLoop() function is the asynchronous variant of loop. Each iteration can return a promise before deciding to continue (next) or exit (exit).

Signature: `asyncLoop(from, theFunction)` → returns a value

The input value is not mutated.

```ts
{@include common/asyncLoop/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/common/asyncLoop
