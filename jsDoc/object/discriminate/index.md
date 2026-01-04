Checks a property value and narrows the object type.

**Supported call styles:**
- Classic: `discriminate(input, key, value)` → returns a boolean
- Curried: `discriminate(key, value)` → returns a function waiting for the input
- Classic predicate: `discriminate(input, key, value)` → narrows the object type
- Curried predicate: `discriminate(key, value)` → narrows the object type

The input object is not mutated.

```ts
{@include object/discriminate/example.ts[3,31]}
```

@remarks
- Predicate overloads (type guards) narrow the output type
- The discriminated value can be an array, acting as an "or" list

@see [`O.deepDiscriminate`](https://utils.duplojs.dev/en/v1/api/object/deepDiscriminate) For deep paths
@see https://utils.duplojs.dev/en/v1/api/object/discriminate

@namespace O
