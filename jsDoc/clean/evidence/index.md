Appends an evidence trait on an object value to mark that a business step was completed.

**Supported call styles:**
- Classic: `appendEvidence(input, evidenceName)` -> returns the input with the evidence trait
- Curried: `appendEvidence(evidenceName)` -> returns a function waiting for the input

Use it to enrich a clean value, an entity, or a composed result object with one or more named evidences across a workflow, while preserving the business properties of the input.

```ts
{@include clean/evidence/example.ts[3,23]}
```

@remarks
- Useful to trace business processing steps by progressively attaching evidence traits, including on objects whose properties were computed together.

@see https://utils.duplojs.dev/en/v1/api/clean/evidence

@namespace C
