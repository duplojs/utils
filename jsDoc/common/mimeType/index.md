Provides a map that resolves file extensions to their MIME types.

**Supported call styles:**
- Access: `mimeType.get(extension)` -> returns the MIME type or undefined

Extensions are stored without the leading dot and should be passed in lower case.
When an extension is not present, the map returns `undefined`.

```ts
{@include common/mimeType/example.ts[3,8]}
```

@see https://utils.duplojs.dev/en/v1/api/common/mimeType
