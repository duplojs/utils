Predicate that checks whether a clean value carries one of the requested evidence traits.

**Supported call styles:**
- Classic: `hasEvidence(input, evidenceName)` -> returns a type guard result
- Curried: `hasEvidence(evidenceName)` -> returns a predicate waiting for the input

Use it to verify that a value has passed a business step previously marked with `appendEvidence`. When the predicate succeeds, TypeScript narrows the input to the matching `Evidence<evidenceName>` branch.

```ts
{@include clean/hasEvidence/example.ts[3,42]}
```

@remarks
- Accepts one evidence name or a tuple of evidence names.
- The runtime check succeeds when at least one requested evidence is present.

@see https://utils.duplojs.dev/en/v1/api/clean/evidence

@namespace C
