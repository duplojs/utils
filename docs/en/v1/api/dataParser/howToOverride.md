---
outline: [2, 3]
prev:
  text: "coerce.*"
  link: "/en/v1/api/dataParser/coerce"
next:
  text: "DataParser"
  link: "/en/v1/api/dataParser/"
---

# How to override DataParser methods?

`DataParser` exposes an override system that lets you add or replace instance methods or properties without forking the library.

## Implementation example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/howToOverride/plugin.doc.ts"
  majorVersion="v1"
  height="750px"
/>

## Steps

1. **Extend the `DataParser` interface** via `declare module` so TypeScript knows your API (`parseOrThrow` in the example).
2. **Define the method** with `dataParserInit.overrideHandler.setMethod(...)` while reusing existing methods (`parser.parse`, `parser.asyncParse`, etc.).
3. **Use the plugin**: once the method is registered, all your parsers (`DP.*`, `DPE.*`) share it at runtime.

## See also

- [`Recover`](/en/v1/api/dataParser/recover) – To intercept errors on the user side without a global override.
