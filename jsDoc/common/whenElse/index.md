The whenElse() function offers two explicit branches: if the predicate is true, theFunction runs, otherwise elseFunction. Return types stay disjoint and preserved.

**Supported call styles:**
- Classic: `whenElse(input, predicate, theFunction, elseFunction)` → returns a value
- Curried: `whenElse(predicate, theFunction, elseFunction)` → returns a function waiting for the input
- Classic predicate: `whenElse(input, predicate, theFunction, elseFunction)` → narrows the input type
- Curried predicate: `whenElse(predicate, theFunction, elseFunction)` → narrows the input type

Predicate overloads (type guards) narrow the output type.

The input value is not mutated.

```ts
{@include common/whenElse/example.ts[3,23]}
```

@see https://utils.duplojs.dev/en/v1/api/common/whenElse
