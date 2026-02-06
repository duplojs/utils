Rounds down a date to a UTC unit boundary.

Signature: `round(input, unit?)` → `TheDate`

`input` accepts `TheDate` or `SerializedTheDate`. Default `unit` is `"day"`.

```ts
{@include date/round/example.ts[3,15]}
```

@remarks
- Supported units: `second`, `minute`, `hour`, `day`, `month`, `year`.

@see https://utils.duplojs.dev/en/v1/api/date/round

@namespace D
