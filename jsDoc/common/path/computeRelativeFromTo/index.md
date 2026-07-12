Computes the relative POSIX-like path from one absolute path to another.

**Supported call styles:**
- Classic: `computeRelativeFromTo(source, destination)` -> returns the relative path or null

The function returns `null` when either path is not absolute.
When paths are absolute, it compares their common segments and builds the relative path with `..` segments when needed.
It returns `.` when source and destination resolve to the same.

```ts
{@include common/path/computeRelativeFromTo/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/computeRelativeFromTo
