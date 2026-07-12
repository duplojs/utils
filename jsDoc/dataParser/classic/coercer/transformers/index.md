Defines the transformer map used by classic coercer parsers.

Signature: `DP.DataParserCoercer.transformers` -> `Map<KindHandler, AnyFunction>`

The map links a DataParser kind to the function that prepares raw input before the inner parser runs. This is what makes `DP.coercer(DP.number())` accept values like numeric strings while still returning the output of `DP.number()`.

```ts
{@include dataParser/classic/coercer/transformers/example.ts[3,13]}
```

@remarks
- This property is the source of truth for the parser kinds that support coercion.
- A coercer memoizes the transformer it resolves during its first parse.
- Changing this map is an advanced extension point.

@see https://utils.duplojs.dev/en/v1/api/dataParser/coercer

@namespace DP
