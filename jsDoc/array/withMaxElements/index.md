Adds a `MaxElements` constraint to a finite tuple without checking it at runtime.

**Supported call styles:**
- Classic: `withMaxElements(array)` -> returns the same tuple with `MaxElements<array.length>`
- Classic with length: `withMaxElements(array, maxLength)` -> returns the same tuple with `MaxElements<maxLength>`

The input must be a tuple with a known finite length. When `maxLength` is provided, it must be a literal number greater than or equal to the tuple length. The maximum can also be inferred from a contextual type, which is useful when a consumer contract requires `MaxElements<N>`.

```ts
{@include array/withMaxElements/example.ts[3,38]}
```

@remarks
- The returned value is the original array reference.
- The function is type-level only and does not validate dynamic arrays at runtime.
- Use it when a finite tuple is already known and needs to satisfy a `MaxElements` contract.

@see [`A.maxElements`](https://utils.duplojs.dev/en/v1/api/array/maxElements) To validate dynamic arrays before adding the constraint
@see [`A.castMaxElements`](https://utils.duplojs.dev/en/v1/api/array/castMaxElements) To readapt an existing `MaxElements` constraint
@see https://utils.duplojs.dev/en/v1/api/array/withMaxElements

@namespace A
