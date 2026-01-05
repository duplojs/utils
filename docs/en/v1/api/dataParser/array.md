---
outline: [2, 3]
description: "DDataParser.array() validates homogeneous arrays by applying an element parser and checkers (min, max, refine, ...). Each error includes the faulty index (items[2])."
prev:
  text: "object"
  link: "/en/v1/api/dataParser/object"
next:
  text: "tuple"
  link: "/en/v1/api/dataParser/tuple"
---

# array

`DDataParser.array()` validates homogeneous arrays by applying an element parser and checkers (`min`, `max`, `refine`, ...). Each error includes the faulty index (`items[2]`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/array/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `element`: parser used for each entry (can be an object, union, etc.).
- `checkers`: `checkerArrayMin`, `checkerArrayMax`, `checkerRefine`, etc.
- `errorMessage`: custom message when the input is not an array.

## Return value

A `DataParserArray` with `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. `parse` returns `DEither.success<Element[]>` or `DEither.error<DataParserError>` with the faulty indexes.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/array/checkers.doc.ts"
  majorVersion="v1"
  height="500px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/array/extended.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## See also

- [`number`](/en/v1/api/dataParser/number) - Parser for numbers
- [`record`](/en/v1/api/dataParser/record) - Parser for objects
