Builds an Left by associating mandatory business information (literal string) with a value representing the error. This is the fundamental brick to signal a contextualized failure.

Signature: `left(information, value)` → returns a value

The input value is not mutated.

```ts
{@include either/left/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/either/left

@namespace E
