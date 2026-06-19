Performs exhaustive pattern matching on a string literal union.

**Supported call styles:**
- Classic: `matchWithString(input, matcher)` -> runs the handler matching the input
- Curried: `matchWithString(matcher)` -> returns a function waiting for the input

Every possible literal must have exactly one matcher key, guaranteeing that no case is left unprocessed. The selected handler receives the string literal corresponding to its key, and the result type is the union of every handler return type.

```ts
{@include pattern/matchWithString/example.ts[3,24]}
```

@remarks Non-literal `string` inputs are rejected because a finite matcher cannot be exhaustive for them.

@see https://utils.duplojs.dev/en/v1/api/pattern/matchWithString
@see [`P.matchWithNumber`](https://utils.duplojs.dev/en/v1/api/pattern/matchWithNumber)

@namespace P
