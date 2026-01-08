---
outline: [2, 3]
prev:
  text: "unknown"
  link: "/en/v1/api/dataParser/unknown"
next:
  text: "array"
  link: "/en/v1/api/dataParser/array"
---

# object

Describes a typed object via a dictionary of parsers. `DDataParser.object()` builds a structured schema, applies each child parser, aggregates errors with their path (`user.address.city`), and returns the validated immutable value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/dataParser/object/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Parameters

- `shape`: dictionary `{ key: DataParser }` (all available parsers are accepted, including those composed via `pipe`).
- `checkers`: `checkerRefine` and custom helpers to validate the complete result (e.g. check inter-field dependencies).
- `errorMessage`: general message used when the input is not a valid object.

## Return value

A `DataParserObject` with the methods `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. `schema.parse(data)` returns `DEither.success<Shape>` if everything passes or `DEither.error<DataParserError>` grouping all issues.

## Other examples

### Custom checkers

<MonacoTSEditor
  src="/examples/v1/api/dataParser/object/checkers.doc.ts"
  majorVersion="v1"
  height="700px"
/>

### Extended mode

<MonacoTSEditor
  src="/examples/v1/api/dataParser/object/extended.doc.ts"
  majorVersion="v1"
  height="700px"
/>

### Projection with `pick`

Select only the publicly exposed fields from a larger schema.

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Standard version</strong></p>
    <MonacoTSEditor
      src="/examples/v1/api/dataParser/object/pick/default.doc.ts"
      majorVersion="v1"
      height="700px"
    />
  </div>
  <div>
    <p><strong>Extended version</strong></p>
    <MonacoTSEditor
      src="/examples/v1/api/dataParser/object/pick/extended.doc.ts"
      majorVersion="v1"
      height="700px"
    />
  </div>
</div>

### Masking with `omit`

Remove secrets (password, tokens, etc.) before returning your objects.

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Standard version</strong></p>
    <MonacoTSEditor
      src="/examples/v1/api/dataParser/object/omit/default.doc.ts"
      majorVersion="v1"
      height="700px"
    />
  </div>
  <div>
    <p><strong>Extended version</strong></p>
    <MonacoTSEditor
      src="/examples/v1/api/dataParser/object/omit/extended.doc.ts"
      majorVersion="v1"
      height="700px"
    />
  </div>
</div>

### Extension with `extends`

Rebuild a schema while keeping a base and adding extra properties.

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Standard version</strong></p>
    <MonacoTSEditor
      src="/examples/v1/api/dataParser/object/extend/default.doc.ts"
      majorVersion="v1"
      height="660px"
    />
  </div>
  <div>
    <p><strong>Extended version</strong></p>
    <MonacoTSEditor
      src="/examples/v1/api/dataParser/object/extend/extended.doc.ts"
      majorVersion="v1"
      height="660px"
    />
  </div>
</div>

### Update schema with `partial`

Make all keys optional (useful for patch/update payloads) without losing field validations.

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Standard version</strong></p>
    <MonacoTSEditor
      src="/examples/v1/api/dataParser/object/partial/default.doc.ts"
      majorVersion="v1"
      height="560px"
    />
  </div>
  <div>
    <p><strong>Extended version</strong></p>
    <MonacoTSEditor
      src="/examples/v1/api/dataParser/object/partial/extended.doc.ts"
      majorVersion="v1"
      height="560px"
    />
  </div>
</div>

### Required fields with `required`

Remove optionality (`optional` wrappers) on an object schema: useful after a `partial` or if you marked fields optional too early.

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Standard version</strong></p>
    <MonacoTSEditor
      src="/examples/v1/api/dataParser/object/required/default.doc.ts"
      majorVersion="v1"
      height="560px"
    />
  </div>
  <div>
    <p><strong>Extended version</strong></p>
    <MonacoTSEditor
      src="/examples/v1/api/dataParser/object/required/extended.doc.ts"
      majorVersion="v1"
      height="560px"
    />
  </div>
</div>

## See also

- [`string`](/en/v1/api/dataParser/string) - Parser for strings
- [`array`](/en/v1/api/dataParser/array) - Parser for arrays
