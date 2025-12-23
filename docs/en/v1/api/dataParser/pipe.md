---
outline: [2, 3]
prev:
  text: "lazy"
  link: "/en/v1/api/dataParser/lazy"
next:
  text: "transform"
  link: "/en/v1/api/dataParser/transform"
---

# pipe

`DDataParser.pipe(input, output)` **composes two parsers**: the first validates/transforms the input, then its result is passed to the second. Handy to chain coercion → strict validation → transformation without writing manual logic.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/pipe/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Parameters

- `input`: first parser executed on the input.
- `output`: parser executed on the output of `input`.
- `checkers`: `checkerRefine` or other helpers applied on `Output<output>`.
- `errorMessage`: generic message if the pipeline fails.

## Return value

A `DataParserPipe`. `schema.parse(data)` runs `input`, then `output` if `input` succeeded. On failure, you receive `DEither.error<DataParserError>` with a path and trace consistent with the faulty stage.

## Other examples

### Extended mode

In extended mode (`DPE`), `pipe` also exists as a **method**: `DPE.someParser().pipe(otherParser)`.  
It is a wrapper around `DPE.pipe(self, otherParser)` exposed by `scripts/dataParser/baseExtended.ts`.

<MonacoTSEditor
  src="/examples/v1/api/dataParser/pipe/extended.doc.ts"
  majorVersion="v1"
  height="560px"
/>

## See also

- [`transform`](/en/v1/api/dataParser/transform) - Transform a value after validating an `inner`
- [`coerce.*`](/en/v1/api/dataParser/coerce) - Normalize data before strict validation
