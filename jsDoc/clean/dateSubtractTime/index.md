Subtracts a duration from a wrapped `Date` and returns a wrapped `Date`.

**Supported call styles:**
- Classic: `dateSubtractTime(date, time)` → `Date`
- Curried: `dateSubtractTime(time)` → function waiting for the date

`time` accepts wrapped `Time` or raw `TheTime`.

```ts
{@include clean/dateSubtractTime/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateSubtractTime

@namespace C
