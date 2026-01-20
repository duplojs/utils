Normalizes a path string by resolving segments and separators.

**Supported call styles:**
- Classic: `normalize(path)` -> returns a normalized path string

It converts Windows separators to `/`, removes `.` and `..` segments, and preserves absolute and UNC semantics.
Trailing separators are kept when present in the input.

```ts
{@include common/path/normalize/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/normalize
