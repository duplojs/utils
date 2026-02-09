---
outline: [2, 3]
description: "The mimeType map links file extensions (without a leading dot) to MIME types."
prev:
  text: "toRegExp"
  link: "/en/v1/api/common/toRegExp"
next:
  text: "interpolation"
  link: "/en/v1/api/common/interpolation"
---

# mimeType

The **`mimeType`** map links file extensions (without a leading dot) to MIME types.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/mimeType/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
const mimeType: Map<string, string>;
```

## Parameters

- None.

## Return value

A `Map` where the key is a file extension (without the dot) and the value is the MIME type.
If the extension is unknown, `mimeType.get(...)` returns `undefined`.

## See also

- [`getExtensionName`](/en/v1/api/common/path/getExtensionName) - Returns the extension of a path
