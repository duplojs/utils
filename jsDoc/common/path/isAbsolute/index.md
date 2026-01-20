Checks whether a path is absolute (POSIX, UNC, or Windows drive).

**Supported call styles:**
- Classic: `isAbsolute(path)` -> returns a boolean

It returns true when the path starts with `/`, `\\`, or a drive letter prefix like `C:\\`.
The function is also a type guard for string literal unions.

```ts
{@include common/path/isAbsolute/example.ts[3,12]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/isAbsolute
