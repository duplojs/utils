The isAsynchronous() method tells whether a data parser requires async execution.

**Supported call styles:**
- Method: `dataParser.isAsynchronous()` -> returns a boolean

It checks the parser definition (and nested parsers when relevant) and does not run any parsing.

```ts
{@include dataParser/classic/base/isAsynchronous/example.ts[3,34]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/isAsynchronous

@namespace DP
