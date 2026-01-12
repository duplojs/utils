The instanceOf() function creates a type guard based on one or several constructors. It checks instanceof while keeping precise typing.

**Supported call styles:**
- Classic: `instanceOf(input, constructor)` → returns a value
- Curried: `instanceOf(constructor)` → returns a function waiting for the input
- Classic predicate: `instanceOf(input, constructor)` → narrows the input type
- Curried predicate: `instanceOf(constructor)` → narrows the input type

Predicate overloads (type guards) narrow the output type.

```ts
{@include common/instanceOf/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/common/instanceOf

@namespace C
