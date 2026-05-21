Checks an object entry value and narrows the tuple type when the predicate is a type guard.

**Supported call styles:**
- Classic predicate: `discriminateEntryValue(entry, predicate)` → narrows the entry type
- Curried predicate: `discriminateEntryValue(predicate)` → narrows the entry type

The predicate is applied to the second element of the entry tuple, that is, the value. The input tuple is not mutated.

```ts
{@include object/discriminateEntryValue/example.ts[3,24]}
```

@remarks
- Predicate overloads (type guards) narrow the tuple type
- Useful when several entries share the same key shape but carry different value types

@see [`O.entry`](https://utils.duplojs.dev/en/v1/api/object/entry) For creating typed entries
@see [`O.discriminateEntryKey`](https://utils.duplojs.dev/en/v1/api/object/discriminateEntryKey) For discriminating by entry key
@see https://utils.duplojs.dev/en/v1/api/object/discriminateEntryValue

@namespace O
