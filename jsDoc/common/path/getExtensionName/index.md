Returns the extension of a path, including the leading dot.

**Supported call styles:**
- Classic: `getExtensionName(path)` -> returns the extension

It returns an empty string when no extension is found or when the path is `..`.

```ts
{@include common/path/getExtensionName/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/path/getExtensionName
