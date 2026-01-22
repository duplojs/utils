Resolves a list of path segments from an origin and returns an Either.

**Supported call styles:**
- Classic: `resolveFrom(origin, segments)` -> returns an Either

Segments are resolved in order using `resolveRelative`.
The result is an `Either` that is `success` only when the resolved path is absolute; otherwise it returns `fail`.

```ts
{@include common/path/resolveFrom/example.ts[3,11]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/resolveFrom
