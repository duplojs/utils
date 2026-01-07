Sorts an array of primitives (String, Number, Date, Time) in ascending or descending order.

**Supported call styles:**
- Classic: `sort(input, type)` -> returns a new array
- Curried: `sort(type)` -> returns a function waiting for the input

The output array contains wrapped primitives.

```ts
{@include clean/sort/example.ts[3,23]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/sort

@namespace C
