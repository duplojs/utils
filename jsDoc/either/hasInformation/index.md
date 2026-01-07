Type guard based on the literal information stored in the Either. Lets you precisely target a business case without extra introspection.

**Supported call styles:**
- Classic predicate: `hasInformation(input, information)` → narrows the input type
- Curried predicate: `hasInformation(information)` → narrows the input type

Acts as a type guard and returns "true" when the match succeeds.

```ts
{@include either/hasInformation/example.ts[5,17]}
```

@see https://utils.duplojs.dev/en/v1/api/either/hasInformation

@namespace E
