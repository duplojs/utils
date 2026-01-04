Checks a deep property value and narrows the object type.

**Supported call styles:**
- Classic: `deepDiscriminate(input, path, value)` → returns a boolean
- Curried: `deepDiscriminate(path, value)` → returns a function waiting for the input
- Classic predicate: `deepDiscriminate(input, path, value)` → narrows the object type
- Curried predicate: `deepDiscriminate(path, value)` → narrows the object type

The input object is not mutated.

@example
```ts
{@include object/deepDiscriminate/example.ts[3,32]}
```

@remarks
- Predicate overloads (type guards) narrow the output type
- The discriminated value can be an array, acting as an "or" list

@see [`O.discriminate`](https://utils.duplojs.dev/en/v1/api/object/discriminate) For top-level keys
@see https://utils.duplojs.dev/en/v1/api/object/deepDiscriminate

@namespace O
