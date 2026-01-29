Returns the last segment of a path (after the final slash), with optional extension removal.

**Supported call styles:**
- Classic: `getBaseName(path, params?)` -> returns the base name or null

The path must contain at least one `/` to match. It returns null when no segment is found.
When `removeExtension` is true, the file extension is removed from the base name.

```ts
{@include common/path/getBaseName/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/getBaseName
