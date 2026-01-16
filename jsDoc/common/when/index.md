The when() function applies a transformation if a predicate is true (or if a type guard succeeds). Otherwise, the input value is returned as is. Exists in immediate or curried form.

**Supported call styles:**
- Classic: `when(input, predicate, theFunction)` → returns a value
- Curried: `when(predicate, theFunction)` → returns a function waiting for the input
- Classic predicate: `when(input, predicate, theFunction)` → narrows the input type
- Curried predicate: `when(predicate, theFunction)` → narrows the input type

Predicate overloads (type guards) narrow the output type.

The input value is not mutated.

```ts
{@include common/when/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/common/when
