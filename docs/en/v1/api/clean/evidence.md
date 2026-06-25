---
outline: [2, 3]
description: "Evidence represents a business-flow proof marker attached to the type of an object value; appendEvidence adds this marker, hasEvidence checks it, evidenceResult creates a proven Result, and GetEvidenceResult retrieves the associated result."
prev:
  text: "Flag"
  link: "/en/v1/api/clean/flag"
next:
  text: "Repository"
  link: "/en/v1/api/clean/repository"
---

# Evidence

An `Evidence` is a business flow marker attached to the type of an object value.
It is used to prove that a specific step has already been executed, without changing the business value itself.

In practice, one function can return a clean value, an entity, or a composed result object enriched with an evidence, and another function can require that exact evidence in its input type. This gives a compile-time guarantee that the first step ran before the second.

`appendEvidence` adds an evidence. `hasEvidence` checks that an evidence is present and acts as a predicate to narrow the type.
`evidenceResult` creates an `Either.Result` while adding the matching evidence to the success value.
`GetEvidenceResult` retrieves the result of a function that carries a given evidence, even when that result is wrapped in a promise or an `Either`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/evidence/tryout.doc.ts"
  majorVersion="v1"
  height="1363px"
/>

## Syntax

### `appendEvidence`

`appendEvidence` is the function used to add an evidence.

#### Classic

```typescript
function appendEvidence<
	GenericInput extends object,
	GenericEvidenceName extends string
>(
	input: GenericInput,
	evidenceName: GenericEvidenceName,
): GenericInput & C.Evidence<GenericEvidenceName>
```

#### Curried

```typescript
function appendEvidence<
	GenericInput extends object,
	GenericEvidenceName extends string
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

### `evidenceResult`

`evidenceResult` creates an `Either.Result` with the provided information and adds that same information as an evidence on the wrapped value.

#### Classic

```typescript
function evidenceResult<
	GenericInformation extends string,
	GenericValue extends object
>(
	information: GenericInformation,
	value: GenericValue,
): C.EvidenceResult<GenericInformation, GenericValue>
```

#### Curried

```typescript
function evidenceResult<
	GenericInformation extends string,
	GenericValue extends object
>(
	information: GenericInformation,
): (value: GenericValue) => C.EvidenceResult<GenericInformation, GenericValue>
```

<MonacoTSEditor
  src="/examples/v1/api/clean/evidence/evidenceResult.doc.ts"
  majorVersion="v1"
  height="1048px"
/>

### `GetEvidenceResult`

`GetEvidenceResult` is a utility type that retrieves, from a function return type, the result branch associated with an evidence.

It automatically goes through promises with `Awaited` and reads the value carried by an `Either.Left` or an `Either.Right`. This makes it easier to type one function parameter from another function's proven result, without manually copying the final type.

<MonacoTSEditor
  src="/examples/v1/api/clean/evidence/getEvidenceResult.doc.ts"
  majorVersion="v1"
  height="523px"
/>

## Parameters

- `input`: object value to enrich with an evidence. It can be a clean value, an entity, or a composed object whose properties were computed together.
- `evidenceName`: business name of the evidence to attach or check (for example `"validated"`, `"authorized"`, `"loaded"`). For `hasEvidence`, it can also be a tuple of names.
- `information`: information of the `Either.Result` to create. For `evidenceResult`, this information also becomes the evidence name added to the value.
- `value`: object value to place in the `Either.Result` and enrich with the evidence derived from `information`.
- `GenericFunction`: function whose return type contains, directly or through a promise / an `Either`, an object value carrying an evidence.
- `EvidenceName`: evidence name available in `GenericFunction`'s result. The type is constrained by the evidences actually present in that result.

## Return value

`appendEvidence` returns a shallow copy of the input, enriched with `C.Evidence<evidenceName>` in its type and with the evidence marker attached at runtime.

`hasEvidence` returns a boolean typed as a predicate. If the result is positive, the input is narrowed to the branch carrying the requested evidence.

`evidenceResult` returns a `C.EvidenceResult<information, value>`, which is an `Either.Result` whose success value carries `C.Evidence<information>`. In curried form, it returns a function waiting for the value to wrap.

`GetEvidenceResult` returns only the branch of the function result that carries `C.Evidence<EvidenceName>`. If the function returns a `Promise`, the resolved type is used; if it returns an `Either.Left` or an `Either.Right`, the wrapped value is used.

This marker can then be required by other functions to enforce business call ordering.

## See also

- [`flag`](/en/v1/api/clean/flag) - Add a flag on entities through a dedicated handler.
- [`useCase`](/en/v1/api/clean/useCase) - Orchestrate business flows where evidences can be attached.
- [`chainedFunction`](/en/v1/api/clean/chainedFunction) - Model ordered business actions, often combined with evidence markers.
