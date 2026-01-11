Business primitive for boolean values.

**Supported call styles:**
- Classic: `Boolean.create(value)` -> returns Either

Use it to avoid raw booleans in the domain and to share a common base type across NewTypes.

Business primitives are an alternative to raw TypeScript strings and numbers.
Instead of manipulating bare values, each primitive is wrapped in a container.
Result: safer, more explicit data, better aligned with the domain.

```ts
{@include clean/Boolean/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives

@namespace C
