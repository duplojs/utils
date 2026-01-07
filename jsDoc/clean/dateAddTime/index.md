Adds a time duration to a Date and returns a new wrapped Date.

**Supported call styles:**
- Classic: `dateAddTime(date, time)` -> returns a Date
- Curried: `dateAddTime(time)` -> returns a function waiting for the date

Use it to move dates forward while keeping values wrapped.

```ts
{@include clean/dateAddTime/example.ts[3,20]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateAddTime

@namespace C
