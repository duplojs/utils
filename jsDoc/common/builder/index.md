The createBuilder() function lets you create a builder whose methods can be defined after declaration (and even redefined) while keeping strict typing.

Signature: `createBuilder(builderName)` → returns a value

The input value is not mutated.

```ts
{@include common/builder/example.ts[3,75]}
```

@see https://utils.duplojs.dev/en/v1/api/common/builder
