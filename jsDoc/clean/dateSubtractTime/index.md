Subtracts a time duration from a Date and returns a new wrapped Date.

**Supported call styles:**
- Classic: `dateSubtractTime(date, time)` -> returns a Date
- Curried: `dateSubtractTime(time)` -> returns a function waiting for the date

Use it to move dates backward while keeping values wrapped.

```ts
{@include clean/dateSubtractTime/example.ts[3,20]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateSubtractTime

@namespace C
