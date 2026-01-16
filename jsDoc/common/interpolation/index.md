The createInterpolation() function generates a typed templating function: the {id} placeholders of the string are required at runtime and checked at compile time. In strict mode, an error is thrown if an id is missing.

Signature: `interpolation(template)` → returns a value

The input value is not mutated.

```ts
{@include common/interpolation/example.ts[3,12]}
```

@see https://utils.duplojs.dev/en/v1/api/common/interpolation
