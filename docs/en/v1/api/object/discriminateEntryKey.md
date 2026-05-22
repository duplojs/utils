---
outline: [2, 3]
description: "Applies a predicate to an object entry key and narrows the tuple type when the predicate is a type guard."
prev:
  text: "discriminate"
  link: "/en/v1/api/object/discriminate"
next:
  text: "discriminateEntryValue"
  link: "/en/v1/api/object/discriminateEntryValue"
---

# discriminateEntryKey

Applies a predicate to an object entry key and narrows the tuple type when the predicate is a type guard.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/discriminateEntryKey/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

### Classic signature

```typescript
function discriminateEntryKey<
  GenericEntry extends readonly [string, unknown],
  GenericPredicateEntryKey extends GenericEntry[0]
>(
  entry: GenericEntry,
  thePredicate: (input: GenericEntry[0]) => input is GenericPredicateEntryKey
): entry is Extract<CleanObjectEntry<GenericEntry>, [GenericPredicateEntryKey, unknown]>;
```

### Curried signature

```typescript
function discriminateEntryKey<
  GenericEntry extends readonly [string, unknown],
  GenericPredicateEntryKey extends GenericEntry[0]
>(
  thePredicate: (input: GenericEntry[0]) => input is GenericPredicateEntryKey
): (entry: GenericEntry) => entry is Extract<CleanObjectEntry<GenericEntry>, [GenericPredicateEntryKey, unknown]>;
```

## Parameters

- `entry`: Key-value tuple to inspect.
- `thePredicate`: Predicate applied to the first tuple item, the key.

## Return value

A boolean. When `thePredicate` is a type guard, the result also narrows the tuple type to entries whose key matches the predicate.

## See also

- [`entry`](/en/v1/api/object/entry) - Creates typed key-value tuples.
- [`discriminateEntryValue`](/en/v1/api/object/discriminateEntryValue) - Same idea but applied to the entry value.
- [`discriminate`](/en/v1/api/object/discriminate) - Discriminates full objects by one property.
