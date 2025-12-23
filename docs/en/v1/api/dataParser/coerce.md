---
outline: [2, 3]
prev:
  text: "recover"
  link: "/en/v1/api/dataParser/recover"
next:
  text: "override DataParser"
  link: "/en/v1/api/dataParser/howToOverride"
---

# coerce.*

The `DP.coerce.*` family applies normalization before running the usual checkers. It is ideal to accept raw payloads (form-data, URLSearchParams, partial JSON) while guaranteeing a strong output type.

## Available functions

- `DP.coerce.string()`: converts to string.
- `DP.coerce.number()`: converts to number (`"42"`).
- `DP.coerce.bigint()`
- `DP.coerce.boolean()`: interprets `"true"`, `"false"`, `1`, `0`, `on`, `off`, etc.
- `DP.coerce.date()`: accepts `Date`, timestamp, or ISO string and returns a `TheDate`.
- `DP.coerce.nil()`: converts `undefined`/`"null"` to `null`.
- `DP.coerce.empty()`: converts `null`/`""` to `undefined`.

## Global example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/coerce/overview.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Direct `DPC` import

Need a tree-shakable import? Use the `DPC` namespace from `@duplojs/utils/dataParserCoerce` (or via `import { DDataParserCoerce } from "@duplojs/utils"`).

<MonacoTSEditor
  src="/examples/v1/api/dataParser/coerce/dpc.doc.ts"
  majorVersion="v1"
  height="360px"
/>

## See also

- [`object`](/en/v1/api/dataParser/object) - Parser for objects
- [`bigint`](/en/v1/api/dataParser/bigint) - Parser for bigint integers
