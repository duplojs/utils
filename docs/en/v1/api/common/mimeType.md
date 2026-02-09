---
outline: [2, 3]
description: "The mimeType object links file extensions (without a leading dot) to MIME types through get and set."
prev:
  text: "toRegExp"
  link: "/en/v1/api/common/toRegExp"
next:
  text: "interpolation"
  link: "/en/v1/api/common/interpolation"
---

# mimeType

The **`mimeType`** object links file extensions (without a leading dot) to MIME types through two methods: `get` and `set`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/mimeType/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
export interface MimeTypeStore {
    get(extensionName: string): string | undefined;
    set(extensionName: string, mimeType: string): void;
}

const mimeType: MimeTypeStore;
```

## Parameters

- None.

## Return value

`mimeType` is an object of type `MimeTypeStore`.

- `mimeType.get(extensionName)` returns the matching MIME type, or `undefined` if the extension is unknown.
- `mimeType.set(extensionName, mimeType)` adds or updates the MIME type associated with an extension.

## See also

- [`getExtensionName`](/en/v1/api/common/path/getExtensionName) - Returns the extension of a path
