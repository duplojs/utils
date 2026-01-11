Business primitive for date values (TheDate).

**Supported call styles:**
- Classic: `Date.create(value)` -> returns Either

Use it to avoid raw dates in the domain and to keep date operations typed and consistent.

Business primitives are an alternative to raw TypeScript strings and numbers.
Instead of manipulating bare values, each primitive is wrapped in a container.
Result: safer, more explicit data, better aligned with the domain.

```ts
{@include clean/Date/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives

@namespace C
