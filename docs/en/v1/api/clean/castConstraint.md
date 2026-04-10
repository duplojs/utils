---
outline: [2, 3]
prev:
  text: "Constraints"
  link: "/en/v1/api/clean/constraints"
next:
  text: "NewType"
  link: "/en/v1/api/clean/newType"
description: "Extends the typing of a constrained value by adding compatible constraints without re-validating it."
---

# castConstraint

`castConstraint` extends the typing of an already constrained value by adding one or more compatible constraints.
It does not re-validate the value; it only adds constraint markers. TypeScript prevents invalid casts.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/castConstraint/tryout.doc.ts"
  majorVersion="v1"
  height="628px"
/>

## Syntax

### Classic signature

```typescript
function castConstraint(
	constrainedType: ConstrainedType,
	constraintHandler: ConstraintHandler | ConstraintHandler[]
): ConstrainedType
```

## Parameters

- `constrainedType`: A value already carrying one or more constraints.
- `constraintHandler`: A constraint handler (or an array of handlers) to add.

## Return value

A new constrained value with the same wrapped value and the additional constraint markers.

## See also

- [`constraints`](/en/v1/api/clean/constraints)
- [`newType`](/en/v1/api/clean/newType)
