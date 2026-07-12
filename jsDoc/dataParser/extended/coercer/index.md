Creates an extended coercer parser around another DataParser.

Signature: `DPE.coercer(inner, definition?)` -> `DataParserCoercerExtended`

This parser does not represent a data type by itself. It represents a parsing action, like `DPE.pipe(...)` or `DPE.lazy(...)`: it receives an input, transforms it with the transformer registered for the inner parser kind, then gives the transformed value to the inner parser.

```ts
{@include dataParser/extended/coercer/example.ts[3,25]}
```

@remarks
- Parsed output is always the output of the inner parser.
- Accepted input is widened with the values supported by the inner parser coercion transformer.
- Prefer the fluent `.coerce()` method on supported extended parsers when you need parser-specific methods before coercion.
- Before wrapping an extended parser with `DPE.coercer(parser)`, check whether that parser exposes `.coerce()`; when it does, prefer `parser.coerce()` so parser-specific fluent methods stay before coercion.

@see https://utils.duplojs.dev/en/v1/api/dataParser/coercer

@namespace DPE
