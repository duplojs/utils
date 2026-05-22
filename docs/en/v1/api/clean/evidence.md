---
outline: [2, 3]
description: "Evidence represents a business-flow proof marker attached to the type of a clean value; appendEvidence is used to add this marker."
prev:
  text: "Flag"
  link: "/en/v1/api/clean/flag"
next:
  text: "Repository"
  link: "/en/v1/api/clean/repository"
---

# Evidence

An `Evidence` is a business flow marker attached to the type of a clean value.
It is used to prove that a specific step has already been executed, without changing the business value itself.

In practice, one function can return an entity enriched with an evidence, and another function can require that exact evidence in its input type. This gives a compile-time guarantee that the first step ran before the second.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/evidence/tryout.doc.ts"
  majorVersion="v1"
  height="754px"
/>

## Syntax

`appendEvidence` is the function used to add an evidence.

### Classic

```typescript
function appendEvidence<Input extends C.AppendEvidenceInput, EvidenceName extends string>(
	input: Input,
	evidenceName: EvidenceName,
): Input & C.Evidence<EvidenceName>
```

### Curried

```typescript
function appendEvidence<EvidenceName extends string>(
	evidenceName: EvidenceName,
): <Input extends C.AppendEvidenceInput>(input: Input) => Input & C.Evidence<EvidenceName>
```

## Parameters

- `input`: clean value (primitive, `ConstrainedType`, `NewType`, or `Entity`) to enrich with an evidence.
- `evidenceName`: business name of the evidence to attach (for example `"validated"`, `"authorized"`, `"loaded"`).

## Return value

Returns the same input value, enriched with `C.Evidence<evidenceName>` in its type.

This marker can then be required by other functions to enforce business call ordering.

## See also

- [`flag`](/en/v1/api/clean/flag) - Add a flag on entities through a dedicated handler.
- [`useCase`](/en/v1/api/clean/useCase) - Orchestrate business flows where evidences can be attached.
- [`chainedFunction`](/en/v1/api/clean/chainedFunction) - Model ordered business actions, often combined with evidence markers.
