Finds duplicated values in an array and returns each duplicated value once.

**Supported call styles:**
- Classic: `findDuplicates(array)` → returns duplicates or `undefined`

Accepts primitive values plus `TheDate` and `TheTime` values from the date namespace.
For date/time values, duplicates are matched by serialized value.

```ts
{@include array/findDuplicates/example.ts[3,24]}
```

@remarks
- Returns `undefined` when no duplicates are found
- Keeps one occurrence per duplicated value in the result

@see [`A.includes`](https://utils.duplojs.dev/en/v1/api/array/includes) For checking a single value presence
@see [`A.group`](https://utils.duplojs.dev/en/v1/api/array/group) For grouping values by key
@see https://utils.duplojs.dev/en/v1/api/array/findDuplicates

@namespace A
