Defines the transformer map used by extended coercer parsers.

Signature: `DPE.DataParserCoercerExtended.transformers` -> `Map<KindHandler, AnyFunction>`

This map is shared with the classic coercer. It links a DataParser kind to the function that prepares raw input before the inner parser runs. The fluent `.coerce()` methods are only added on extended parsers whose kind is supported by this coercion system.

```ts
{@include dataParser/extended/coercer/transformers/example.ts[3,16]}
```

@remarks
- This property is the source of truth for the parser kinds that support coercion.
- A coercer memoizes the transformer it resolves during its first parse.
- Changing this map is an advanced extension point.

@see https://utils.duplojs.dev/en/v1/api/dataParser/coercer

@namespace DPE
