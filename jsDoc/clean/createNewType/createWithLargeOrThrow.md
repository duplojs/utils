Creates a NewType value from the handler's wider input type and throws on error.

This is useful when hydrating data from a less precise source, while still keeping a narrower validated output type.

```ts
{@include clean/createNewType/example.ts[46,46]}
```
