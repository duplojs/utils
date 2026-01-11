The whenNot() function applies a transformation only when the predicate fails (or when the type guard does not match). Otherwise, the input is returned as is. Exists in immediate and curried versions.

**Supported call styles:**
- Classic: `whenNot(input, predicate, theFunction)` → returns a value
- Curried: `whenNot(predicate, theFunction)` → returns a function waiting for the input
- Classic predicate: `whenNot(input, predicate, theFunction)` → narrows the input type
- Curried predicate: `whenNot(predicate, theFunction)` → narrows the input type

Predicate overloads (type guards) narrow the output type.

The input value is not mutated.

```ts
{@include common/whenNot/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/common/whenNot

@namespace C
