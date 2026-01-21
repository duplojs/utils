Returns the parent folder path of a POSIX path.

**Supported call styles:**
- Classic: `getParentFolderPath(path)` -> returns the parent folder

It removes a trailing slash, drops the last segment, and falls back to `/` for absolute paths or `.` for relative paths when needed.

```ts
{@include common/path/getParentFolderPath/example.ts[3,10]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/getParentFolderPath
