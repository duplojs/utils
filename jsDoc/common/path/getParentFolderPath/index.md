Returns the parent folder path of a file or directory path.

**Supported call styles:**
- Classic: `getParentFolderPath(path)` -> returns the parent folder

It normalizes Windows separators, removes the last segment, and falls back to `/` or `.` when needed.

```ts
{@include common/path/getParentFolderPath/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/getParentFolderPath
