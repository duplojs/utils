Provides an object that resolves file extensions to their MIME types and allows custom registrations.

**Supported call styles:**
- Access: `mimeType.get(extension)` -> returns the MIME type or undefined
- Registration: `mimeType.set(extension, mimeType)` -> stores or overrides a MIME type for an extension

Extensions are stored without the leading dot and should be passed in lower case.
When an extension is not present, `mimeType.get(...)` returns `undefined`.

```ts
{@include common/mimeType/example.ts[3,12]}
```

@see https://utils.duplojs.dev/en/v1/api/common/mimeType
