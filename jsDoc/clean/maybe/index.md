Union type that represents an optional entity in business flows.

**Supported usage style:**
- Type contract: `Maybe<Entity>`

Use `Maybe` to define a business contract before implementation details. Then produce values with `some(entity)` when data exists, or `none(entityName)` when it does not.

```ts
{@include clean/maybe/example.ts[3,29]}
```

@remarks
`Maybe` helps keep use-case signatures explicit: a function can return a typed optional entity without exposing null/undefined at the domain boundary.

@see https://utils.duplojs.dev/en/v1/api/clean/maybe

@namespace C
