Type guard based on the literal information stored in the Either. Accepts one information or an array of informations to target multiple business cases without extra introspection.

**Supported call styles:**
- Classic predicate: `hasInformation(input, information)` where `information` can be a string or an array of strings
- Curried predicate: `hasInformation(information)` where `information` can be a string or an array of strings

Acts as a type guard and returns "true" when the Either information matches one of the provided informations.

```ts
{@include either/hasInformation/example.ts[5,22]}
```

@see https://utils.duplojs.dev/en/v1/api/either/hasInformation

@namespace E
