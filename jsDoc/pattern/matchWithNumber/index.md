Performs exhaustive pattern matching on a number literal union.

**Supported call styles:**
- Classic: `matchWithNumber(input, matcher)` -> runs the handler matching the input
- Curried: `matchWithNumber(matcher)` -> returns a function waiting for the input

Every possible literal must have exactly one matcher key, guaranteeing that no case is left unprocessed. The selected handler receives the number literal corresponding to its key, and the result type is the union of every handler return type.

```ts
{@include pattern/matchWithNumber/example.ts[3,24]}
```

@remarks Non-literal `number` inputs are rejected because a finite matcher cannot be exhaustive for them.

@see https://utils.duplojs.dev/en/v1/api/pattern/matchWithNumber
@see [`P.matchWithString`](https://utils.duplojs.dev/en/v1/api/pattern/matchWithString)

@namespace P
