Finds the closest date from an iterable relative to a target date.

**Supported call styles:**
- Classic: `closestTo(input, target, params?)` → `TheDate | undefined`
- Curried: `closestTo(target, params?)` → `(input) => TheDate | undefined`

```ts
{@include date/closestTo/example.ts[3,17]}
```

@remarks
- `tieBreaker: "favorPast"` ignores future candidates.
- `tieBreaker: "favorFuture"` ignores past candidates.

@see https://utils.duplojs.dev/en/v1/api/date/closestTo

@namespace D
