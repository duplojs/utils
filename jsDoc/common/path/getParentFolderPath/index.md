Returns the parent folder path of a POSIX path.

**Supported call styles:**
- Classic: `getParentFolderPath(path)` -> returns the parent folder or null

The path must contain at least one `/` to match. It removes a trailing slash and drops the last segment.

```ts
{@include common/path/getParentFolderPath/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/getParentFolderPath
