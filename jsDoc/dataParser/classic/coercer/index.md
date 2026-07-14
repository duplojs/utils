Creates a classic coercer parser around another DataParser.

Signature: `DP.coercer(inner, definition?)` -> `DataParserCoercer`

This parser does not represent a data type by itself. It represents a parsing action, like `DP.pipe(...)` or `DP.lazy(...)`: it receives an input, transforms it with the transformer registered for the inner parser kind, then gives the transformed value to the inner parser.

```ts
{@include dataParser/classic/coercer/example.ts[3,23]}
```

@remarks
- Parsed output is always the output of the inner parser.
- Accepted input is widened with the values supported by the inner parser coercion transformer.
- If no transformer is registered for the inner parser kind, the coercer still runs the inner parser with the original value.

@see https://utils.duplojs.dev/en/v1/api/dataParser/coercer

@namespace DP
