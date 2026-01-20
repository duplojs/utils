Checks whether a path uses only Unix separators.

**Supported call styles:**
- Classic: `isUnixPath(path)` -> returns a boolean

It returns true when the path does not contain any backslashes.
The function is also a type guard for string literal unions.

```ts
{@include common/path/isUnixPath/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/isUnixPath
