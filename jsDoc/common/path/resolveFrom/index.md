Resolves a list of path segments from an origin.

**Supported call styles:**
- Classic: `resolveFrom(paths, origin)` -> returns a resolved path
- Curried: `resolveFrom(origin)(paths)` -> returns a resolved path

Segments are resolved in reverse order, stopping at the first absolute path.
The result is normalized and falls back to `.` when empty.

```ts
{@include common/path/resolveFrom/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/resolveFrom
