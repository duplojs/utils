The forwardAsserts() function throws when a predicate fails and returns the validated input. It supports classic and curried forms, with type-guard and boolean predicates.

**Supported call styles:**
- Classic: `forwardAsserts(input, predicate)` → returns the narrowed input or throws
- Curried: `forwardAsserts(predicate)(input)` → returns the validated input or throws

It is useful when you want both runtime validation and a returned value you can keep using directly, especially inside `pipe()`. With a type guard predicate, the return type is narrowed. With a boolean predicate, the original input type is preserved. It throws an `AssertsError` with the failing input value.

```ts
{@include common/forwardAsserts/example.ts[3,9]}
```

@see https://utils.duplojs.dev/en/v1/api/common/forwardAsserts
