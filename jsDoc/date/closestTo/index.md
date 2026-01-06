Finds the closest date to a target.

**Supported call styles:**
- Classic: `closestTo(input, target, params?)` → returns a value
- Curried: `closestTo(target, params?)` → returns a function waiting for the input

The input value is not mutated.

```ts
{@include date/closestTo/example.ts[3,17]}
```

@remarks
- `tieBreaker` can be "favorPast" or "favorFuture" to resolve equidistant dates.

@see https://utils.duplojs.dev/en/v1/api/date/closestTo

@namespace D
