The equal() function compares a value to one or several literals. With primitives, it acts as a type guard and restricts the type to the provided values.

**Supported call styles:**
- Classic: `equal(input, value)` → returns a value
- Curried: `equal(value)` → returns a function waiting for the input
- Classic predicate: `equal(input, value)` → narrows the input type
- Curried predicate: `equal(value)` → narrows the input type

Predicate overloads (type guards) narrow the output type.

```ts
{@include common/equal/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/common/equal
