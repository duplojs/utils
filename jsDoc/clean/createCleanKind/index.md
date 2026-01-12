Creates a kind namespace scoped to the Clean domain.

**Supported call styles:**
- Classic: `createCleanKind(name)` -> returns a kind handler

Use it to define Clean-specific kinds so domain tags do not collide with other namespaces.

```ts
{@include clean/createCleanKind/example.ts[3,19]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/createCleanKind

@namespace C
