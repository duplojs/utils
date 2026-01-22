Returns the last extension of a path, without the leading dot.

**Supported call styles:**
- Classic: `getExtensionName(path)` -> returns the extension or null

It returns null when no extension is found, when the path ends with a dot, or when the path is `..`.

```ts
{@include common/path/getExtensionName/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/getExtensionName
