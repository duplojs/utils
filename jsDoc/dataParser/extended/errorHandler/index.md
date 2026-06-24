Creates an extended data parser that reassigns issue messages after a schema has run.

**Supported call styles:**
- Method: `DPE.errorHandler(inner, transformers, definition?)` -> returns an error handler parser

Runs the inner parser, inspects every produced issue source, and replaces matching messages with the provided transformers.

```ts
{@include dataParser/extended/errorHandler/example.ts[3,23]}
```

@remarks
Checkers added directly to the returned error handler run after message rewriting. Issues produced by those checkers keep their own `errorMessage` or the handler `definition.errorMessage`.

@see https://utils.duplojs.dev/en/v1/api/dataParser/errorHandler

@namespace DPE
