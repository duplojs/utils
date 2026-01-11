The loop() function runs a loop controlled via the next and exit callbacks. Each iteration receives the counter and the previous output to drive the flow.

Signature: `loop(from, theFunction)` → returns a value

The input value is not mutated.

```ts
{@include common/loop/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/common/loop

@namespace C
