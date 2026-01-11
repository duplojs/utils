Creates a pattern that matches any of the provided patterns.

Signature: `union(...patterns)` → returns a pattern tool

The returned tool can be used with `match` or `isMatch`.

```ts
{@include pattern/union/example.ts[3,23]}
```

@see [`P.isMatch`](https://utils.duplojs.dev/en/v1/api/pattern/isMatch) For checking values
@see https://utils.duplojs.dev/en/v1/api/pattern/union

@namespace P
