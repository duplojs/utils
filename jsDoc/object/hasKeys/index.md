Checks if an object has specific keys defined.

**Supported call styles:**
- Classic: `hasKeys(partialObject, keys)` → returns a boolean
- Curried: `hasKeys(keys)` → returns a function waiting for the object
- Classic predicate: `hasKeys(partialObject, keys)` → narrows the object type
- Curried predicate: `hasKeys(keys)` → narrows the object type

The input object is not mutated.

@example
```ts
{@include object/hasKeys/example.ts[3,27]}
```

@remarks
- Predicate overloads (type guards) narrow the object type
- Passing an array of keys acts as an "and" (all keys must be present)

@see https://utils.duplojs.dev/en/v1/api/object/hasKeys

@namespace O
