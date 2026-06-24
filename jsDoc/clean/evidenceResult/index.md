Creates an `Either.Result` while adding an evidence trait to the wrapped object value.

**Supported call styles:**
- Classic: `evidenceResult(information, value)` -> returns a result whose value carries the same evidence as `information`

Use it when a business step needs to return an `Either.Result` and mark the successful value as proven in the same operation. This keeps the implementation short and lets the result information drive the evidence type.

```ts
{@include clean/evidenceResult/example.ts[3,38]}
```

@remarks
- `information` is used both as the `Either.Result` information and as the evidence name attached to the value.
- The input value must be an object because evidences are attached to object values.

@see https://utils.duplojs.dev/en/v1/api/clean/evidence
@see [`C.appendEvidence`](https://utils.duplojs.dev/en/v1/api/clean/evidence)

@namespace C
