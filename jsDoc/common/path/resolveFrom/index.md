Resolves a list of path segments from an origin and returns an Either.

**Supported call styles:**
- Classic: `resolveFrom(paths, origin)` -> returns an Either
- Curried: `resolveFrom(origin)(paths)` -> returns an Either

Segments are resolved in order using `resolveRelative`.
The result is an `Either` that is `success` only when the resolved path is absolute; otherwise it returns `fail`.

```ts
{@include common/path/resolveFrom/example.ts[3,17]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/resolveFrom
