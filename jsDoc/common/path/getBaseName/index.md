Returns the last segment of a path, optionally without an extension.

**Supported call styles:**
- Classic: `getBaseName(path, params?)` -> returns the base name

When an extension is provided, it is removed only if it matches the end of the base name.

```ts
{@include common/path/getBaseName/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/getBaseName
