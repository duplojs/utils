Checks an object entry key and narrows the tuple type when the predicate is a type guard.

**Supported call styles:**
- Classic predicate: `discriminateEntryKey(entry, predicate)` → narrows the entry type
- Curried predicate: `discriminateEntryKey(predicate)` → narrows the entry type

The predicate is applied to the first element of the entry tuple, that is, the key. The input tuple is not mutated.

```ts
{@include object/discriminateEntryKey/example.ts[3,24]}
```

@remarks
- Predicate overloads (type guards) narrow the tuple type
- Useful after `Object.entries(...)` or with tuples built through `O.entry(...)`

@see [`O.entry`](https://utils.duplojs.dev/en/v1/api/object/entry) For creating typed entries
@see [`O.discriminateEntryValue`](https://utils.duplojs.dev/en/v1/api/object/discriminateEntryValue) For discriminating by entry value
@see https://utils.duplojs.dev/en/v1/api/object/discriminateEntryKey

@namespace O
