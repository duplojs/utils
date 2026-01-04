Consumes an iterable or async iterable.

Signature: `execute(iterator)` → returns `void` or `Promise<void>`

This is useful for running generators with side effects.

```ts
{@include generator/execute/example.ts[3,19]}
```

@see [`G.loop`](https://utils.duplojs.dev/en/v1/api/generator/loop) For generating values
@see https://utils.duplojs.dev/en/v1/api/generator/execute

@namespace G
