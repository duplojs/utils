Creates an extended data parser for TheTime values or safe millisecond numbers.

**Supported call styles:**
- Method: `DPE.time(definition?)` -> returns a time parser

Validates TheTime values (or safe millisecond numbers) and exposes time-specific methods like min and max.

```ts
{@include dataParser/extended/time/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/time

@namespace DPE
