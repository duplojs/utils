---
outline: [2, 3]
description: "The toMapDataParser() function converts a Clean handler (NewType, constraint, primitive, or entity property) into a DataParser that returns a wrapped value."
prev:
  text: "castConstraint"
  link: "/en/v1/api/clean/castConstraint"
next:
  text: "NewType"
  link: "/en/v1/api/clean/newType"
---

# toMapDataParser

The **`toMapDataParser()`** function converts a Clean handler (NewType, constraint, primitive, or entity property definition) into a `DataParser`.
The resulting parser maps parsed input into a typed object while preserving business kinds (`newTypeKind`, `constrainedTypeKind`) when available.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/toMapDataParser/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

### Classic signature

```typescript
function toMapDataParser(
	input: ConstraintHandler | ConstraintsSetHandler | PrimitiveHandler | EntityPropertyDefinition,
	params?: { coerce?: boolean }
): DDataParser.Contract<MappedValue, unknown>
```

## Parameters

- `input`: Clean handler to convert (`NewType`, constraint, constraints set, primitive, or entity property definition).
- `params`: Conversion options.
- `params.coerce`: Enables coercion on compatible parsers (string, number, boolean, date, time, etc.).

## Return value

A `DDataParser.Contract` that:
- parses `unknown` input,
- maps output into a typed object ready for domain usage,
- preserves business type markers when present.

## See also

- [`constraints`](/en/v1/api/clean/constraints)
- [`castConstraint`](/en/v1/api/clean/castConstraint)
- [`newType`](/en/v1/api/clean/newType)
- [`entity`](/en/v1/api/clean/entity)
