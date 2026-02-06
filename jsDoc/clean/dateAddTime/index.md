Adds a duration to a wrapped `Date` and returns a wrapped `Date`.

**Supported call styles:**
- Classic: `dateAddTime(date, time)` → `Date`
- Curried: `dateAddTime(time)` → function waiting for the date

`time` accepts wrapped `Time` or raw `TheTime`.

```ts
{@include clean/dateAddTime/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateAddTime

@namespace C
