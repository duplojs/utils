The group() function runs several Either values (or functions returning an Either) and returns the first Left encountered. If all are Right, it aggregates their values into a typed object.

Signature: `group(group)` → returns a value

The input value is not mutated.

```ts
{@include either/group/example.ts[3,10]}
```

@remarks
- Stops at the first Left and forwards it as-is.

@see https://utils.duplojs.dev/en/v1/api/either/group

@namespace E
