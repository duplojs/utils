Creates a data parser that reassigns issue messages after a schema has run.

**Supported call styles:**
- Classic: `DP.errorHandler(inner, transformers, definition?)` -> returns an error handler parser
- Curried: not available

Runs the inner parser, inspects every produced issue source, and replaces matching messages with the provided transformers.

```ts
{@include dataParser/classic/errorHandler/example.ts[3,28]}
```

@remarks
Checkers added directly to the returned error handler run after message rewriting. Issues produced by those checkers keep their own `errorMessage` or the handler `definition.errorMessage`.

@see https://utils.duplojs.dev/en/v1/api/dataParser/errorHandler

@namespace DP
