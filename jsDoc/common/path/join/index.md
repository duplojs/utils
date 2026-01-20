Joins path segments and normalizes the result.

**Supported call styles:**
- Classic: `join(...segments)` -> returns a normalized path string

It inserts separators between segments, avoids duplicate slashes, and resolves `.` and `..` segments.

```ts
{@include common/path/join/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/join
