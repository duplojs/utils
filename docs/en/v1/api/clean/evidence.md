---
outline: [2, 3]
description: "Evidence represents a business-flow proof marker attached to the type of a clean value; appendEvidence adds this marker and hasEvidence checks it."
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

`appendEvidence` adds an evidence. `hasEvidence` checks that an evidence is present and acts as a predicate to narrow the type.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/evidence/tryout.doc.ts"
  majorVersion="v1"
  height="1006px"
/>

## Syntax

### `appendEvidence`

`appendEvidence` is the function used to add an evidence.

#### Classic

```typescript
function appendEvidence<
	GenericInput extends C.AppendEvidenceInput, 
	GenericEvidenceName extends string
>(
	input: GenericInput,
	evidenceName: GenericEvidenceName,
): GenericInput & C.Evidence<GenericEvidenceName>
```

#### Curried

```typescript
function appendEvidence<
	GenericInput extends C.AppendEvidenceInput
	EvidenceName extends string
>(
	evidenceName: GenericEvidenceName,
): (input: GenericInput) => GenericInput & C.Evidence<GenericEvidenceName>
```

### `hasEvidence`

`hasEvidence` checks whether an evidence is present and narrows the input type when the predicate succeeds.

#### Classic

```typescript
function hasEvidence<
	GenericInput,
	GenericEvidenceName
>(
	input: GenericInput,
	evidenceName: GenericEvidenceName | readonly [GenericEvidenceName, ...GenericEvidenceName[]],
): input is Extract<GenericInput, C.Evidence<GenericEvidenceName>>
```

#### Curried

```typescript
function hasEvidence<
	GenericInput,
	GenericEvidenceName
>(
	evidenceName: GenericEvidenceName | readonly [GenericEvidenceName, ...GenericEvidenceName[]],
): (input: GenericInput) => input is Extract<GenericInput, C.Evidence<GenericEvidenceName>>
```

## Parameters

- `input`: clean value (primitive, `ConstrainedType`, `NewType`, or `Entity`) to enrich with an evidence.
- `evidenceName`: business name of the evidence to attach or check (for example `"validated"`, `"authorized"`, `"loaded"`). For `hasEvidence`, it can also be a tuple of names.

## Return value

`appendEvidence` returns the same input value, enriched with `C.Evidence<evidenceName>` in its type.

`hasEvidence` returns a boolean typed as a predicate. If the result is positive, the input is narrowed to the branch carrying the requested evidence.

This marker can then be required by other functions to enforce business call ordering.

## See also

- [`flag`](/en/v1/api/clean/flag) - Add a flag on entities through a dedicated handler.
- [`useCase`](/en/v1/api/clean/useCase) - Orchestrate business flows where evidences can be attached.
- [`chainedFunction`](/en/v1/api/clean/chainedFunction) - Model ordered business actions, often combined with evidence markers.
