Checks whether a path is absolute (POSIX).

**Supported call styles:**
- Classic: `isAbsolute(path)` -> returns a boolean

It returns true when the path starts with `/` and does not contain `..` segments.

```ts
{@include common/path/isAbsolute/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/isAbsolute
