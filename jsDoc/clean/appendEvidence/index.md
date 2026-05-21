Appends an evidence trait on a clean value to mark that a business step was completed.

**Supported call styles:**
- Classic: `appendEvidence(input, evidenceName)` -> returns the input with the evidence trait
- Curried: `appendEvidence(evidenceName)` -> returns a function waiting for the input

Use it to enrich an input with one or more named evidences across a workflow, while keeping the same business value.

```ts
{@include clean/appendEvidence/example.ts[3,15]}
```

@remarks
- Useful to trace business processing steps by progressively attaching evidence traits.

@see https://utils.duplojs.dev/en/v1/api/clean/appendEvidence

@namespace C
