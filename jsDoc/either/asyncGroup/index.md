The asyncGroup() function runs synchronous or asynchronous Either values in parallel (promises, Future) and returns the first Left encountered. If all are Right, it aggregates their values into a typed object.

Signature: `asyncGroup(group)` → returns a value

The input value is not mutated.

```ts
{@include either/asyncGroup/example.ts[3,13]}
```

@remarks
- Stops at the first Left and forwards it as-is.

@see https://utils.duplojs.dev/en/v1/api/either/asyncGroup

@namespace E
