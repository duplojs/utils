Wraps a template literal parser in an extended coercer parser.

**Supported call styles:**
- Method: `dataParser.coerce()` -> returns a coercer parser

Keeps the current template literal parser as the inner parser, then accepts primitive values that can be stringified before validating the final template literal string.

```ts
{@include dataParser/extended/templateLiteral/coerce/example.ts[3,16]}
```

@remarks
Use this method when the whole input can be stringified into the expected template literal shape.

@see https://utils.duplojs.dev/en/v1/api/dataParser/templateLiteral

@namespace DPE
