Readapts an existing `MaxElements` constraint to a less restrictive compatible maximum.

**Supported call styles:**
- Classic: `castMaxElements(array, maxLength)` -> returns the same array with an added `MaxElements` marker
- Curried: `castMaxElements(maxLength)` -> returns a function waiting for the array

The function does not check the array length at runtime. Use it only when the new maximum is already implied by an existing `MaxElements` constraint, usually after `maxElements` has narrowed the array. For example, `MaxElements<10>` can be readapted to `MaxElements<15>`.

```ts
{@include array/castMaxElements/example.ts[3,28]}
```

@remarks
- The returned value is the original array reference.
- TypeScript rejects casts from a larger maximum to a smaller maximum.
- The maximum must be a literal number.

@see [`A.maxElements`](https://utils.duplojs.dev/en/v1/api/array/maxElements) To create the initial `MaxElements` constraint
@see https://utils.duplojs.dev/en/v1/api/array/castMaxElements

@namespace A
