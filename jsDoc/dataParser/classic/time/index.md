Creates a data parser for TheTime values or safe millisecond numbers.

**Supported call styles:**
- Classic: `DP.time(definition?)` -> returns a time parser
- Curried: not available

Validates that the input is a TheTime (or a safe millisecond number), optionally applies ISO string coercion, and runs the configured checkers.

```ts
{@include dataParser/classic/time/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/time

@namespace DP
