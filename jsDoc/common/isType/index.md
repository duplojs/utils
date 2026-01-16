The isType() function creates a type guard based on typeof, Array.isArray, iterables, functions, etc. It allows narrowing a union to the checked type.

**Supported call styles:**
- Classic: `isType(input, type)` → returns a value
- Curried: `isType(type)` → returns a function waiting for the input
- Classic predicate: `isType(input, type)` → narrows the input type
- Curried predicate: `isType(type)` → narrows the input type

Predicate overloads (type guards) narrow the output type.

```ts
{@include common/isType/example.ts[3,18]}
```

@see https://utils.duplojs.dev/en/v1/api/common/isType
