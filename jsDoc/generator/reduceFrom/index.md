Creates a typed start value for `reduce`.

Signature: `reduceFrom(value)` → returns a reduce start wrapper

This is useful for preserving object and array types in reductions.

```ts
{@include generator/reduceFrom/example.ts[3,7]}
```

@see [`G.reduce`](https://utils.duplojs.dev/en/v1/api/generator/reduce) For reducing iterables
@see https://utils.duplojs.dev/en/v1/api/generator/reduceFrom

@namespace G
