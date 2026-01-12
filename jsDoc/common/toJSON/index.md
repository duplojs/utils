The toJSON() function prepares a value for JSON serialization while respecting objects' toJSON methods, traversing arrays/tuples, and excluding functions.

Signature: `toJSON(value)` → returns a value

The input value is not mutated.

```ts
{@include common/toJSON/example.ts[4,23]}
```

@see https://utils.duplojs.dev/en/v1/api/common/toJSON

@namespace C
