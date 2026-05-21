---
outline: [2, 3]
description: "Applies a predicate to an object entry value and narrows the tuple type when the predicate is a type guard."
prev:
  text: "discriminateEntryKey"
  link: "/en/v1/api/object/discriminateEntryKey"
next:
  text: "deepDiscriminate"
  link: "/en/v1/api/object/deepDiscriminate"
---

# discriminateEntryValue

Applies a predicate to an object entry value and narrows the tuple type when the predicate is a type guard.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/discriminateEntryValue/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntax

### Classic signature

```typescript
function discriminateEntryValue<
  GenericEntry extends readonly [string, unknown],
  GenericPredicateEntryValue extends GenericEntry[1]
>(
  entry: GenericEntry,
  thePredicate: (input: GenericEntry[1]) => input is GenericPredicateEntryValue
): entry is Extract<CleanObjectEntry<GenericEntry>, [string, GenericPredicateEntryValue]>;
```

### Curried signature

```typescript
function discriminateEntryValue<
  GenericEntry extends readonly [string, unknown],
  GenericPredicateEntryValue extends GenericEntry[1]
>(
  thePredicate: (input: GenericEntry[1]) => input is GenericPredicateEntryValue
): (entry: GenericEntry) => entry is Extract<CleanObjectEntry<GenericEntry>, [string, GenericPredicateEntryValue]>;
```

## Parameters

- `entry`: Key-value tuple to inspect.
- `thePredicate`: Predicate applied to the second tuple item, the value.

## Return value

A boolean. When `thePredicate` is a type guard, the result also narrows the tuple type to entries whose value matches the predicate.

## See also

- [`entry`](/en/v1/api/object/entry) - Creates typed key-value tuples.
- [`discriminateEntryKey`](/en/v1/api/object/discriminateEntryKey) - Same idea but applied to the entry key.
- [`discriminate`](/en/v1/api/object/discriminate) - Discriminates full objects by one property.
