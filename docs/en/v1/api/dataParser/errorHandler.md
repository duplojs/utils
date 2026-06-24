---
outline: [2, 3]
description: "DDataParser.errorHandler(inner, transformers) wraps a parser and reassigns messages on the issues it produces. It lets you define user-facing errors after the schema has been declared."
prev:
  text: "recover"
  link: "/en/v1/api/dataParser/recover"
next:
  text: "isAsynchronous"
  link: "/en/v1/api/dataParser/isAsynchronous"
---

# errorHandler

`DDataParser.errorHandler(inner, transformers)` wraps a parser and reassigns messages on the issues it produces. It lets you define user-facing errors after the schema has been declared.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/errorHandler/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntax

```ts
DDataParser.errorHandler(inner, transformers, definition?)
DDataParserExtended.errorHandler(inner, transformers, definition?)
dataParser.errorHandler(transformers, definition?)
```

## Parameters

- `inner`: parser to execute before rewriting messages.
- `transformers`: one transformer or an array of transformers. A transformer receives the issue source and returns a replacement message or `null`.
- `definition.checkers`: applied to the final parsed value after message rewriting. Issues produced by these checkers are not rewritten by this error handler.
- `definition.errorMessage`: generic message for issues produced by the error handler itself.

## Return value

A `DataParserErrorHandler`. `schema.parse(data)` returns the same success or error state as `inner`, but every produced issue can receive a new `message` based on its source parser or checker.

Checkers added directly to the returned `DataParserErrorHandler` run after the handler has rewritten the inner parser issues. If those checkers fail, their messages keep their own `errorMessage` or the handler `definition.errorMessage`.

## Other examples

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/errorHandler/extended.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## See also

- [`recover`](/en/v1/api/dataParser/recover) - Return a fallback value when a parser fails
- [`refine`](/en/v1/api/dataParser/refine) - Add custom validation rules with messages
