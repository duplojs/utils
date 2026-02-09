Resolves a list of path segments from an origin.

**Supported call styles:**
- Classic: `resolveFrom(origin, segments, params?)` -> returns the resolved absolute path or null

Segments are resolved in order using `resolveRelative`.
The function returns `null` when the final path is not absolute.
When `params.stayInOrigin` is `true`, the resolution returns `null` if segments escape the origin with leading `../`.

```ts
{@include common/path/resolveFrom/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/resolveFrom
