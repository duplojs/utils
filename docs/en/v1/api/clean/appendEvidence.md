---
outline: [2, 3]
description: "appendEvidence adds an evidence trait to a clean value to represent that a business step has been completed."
prev:
  text: "Flag"
  link: "/en/v1/api/clean/flag"
next:
  text: "Repository"
  link: "/en/v1/api/clean/repository"
---

# appendEvidence

`appendEvidence` adds an evidence trait to a clean value.
It is useful when a business flow needs to mark that one or several named steps were completed, while keeping the same business value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/appendEvidence/tryout.doc.ts"
  majorVersion="v1"
  height="754px"
/>

## Syntax

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

- `input`: clean value to enrich with an evidence trait.
- `evidenceName`: name of the evidence to attach.

## Return value

Returns the same input value with an additional evidence trait in its type.

## See also

- [`flag`](/en/v1/api/clean/flag) - Add a flag on entities through a dedicated handler.
- [`useCase`](/en/v1/api/clean/useCase) - Orchestrate business flows where evidence can be attached.
- [`chainedFunction`](/en/v1/api/clean/chainedFunction) - Model ordered business actions in an aggregate.
